---
title: kernel.pid_max引发的集群问题
author: missionOne
date: '2022-11-27'
categories:
    - Kubernetes常见问题
tags:
    - Kubernetes
---

:::tip
一起由于系统参数设置不合理导致的线上kubernetes集群问题
:::

## 问题现象
k8s集群内服务出现健康检查失败情况，同时系统服务（如kubelet也出现异常重启现象）

## 问题分析

### 初步定位
通过下面的命令检查kubelet的日志：
```bash
journalctl -u kubelet
```

确实发现了一些异常记录，这里摘抄关键的部分：
```
kubelet[3124]: runtime: failed to create new OS thread (have 15 already; errno=11)
runtime: may need to increase max user processes (ulimiu)
kubelet[3124]: fatal error: newosproc
kubelet[3124]: goroutine 1 [running, locked to thread]:
```

此时分析系统日志，发现无法创建进程：
```bash
dmesg -TL

-bash: fork: retry: No child processes
```

再手动启动容器，发现也无法创建，提示初始化线程资源失败：
```bash
docker run -it --rm centos bash

runtime/cgo: runtime/cgo: pthread_create failed: Resource temporarily unavailable
pthread_create failed: Resource temporarily unavailable
SIGABRT: abort
```

到此怀疑是系统中关于进程相关的参数限制了新的进程创建，导致的问题，于是进一步分析系统参数问题。

### 进一步分析
检查`ulimit`设置：
```bash
ulimit -a

core file size          (blocks, -c) 0
data seg size           (kbytes, -d) unlimited
scheduling priority             (-e) 0
file size               (blocks, -f) unlimited
pending signals                 (-i) 249047
max locked memory       (kbytes, -l) 64
max memory size         (kbytes, -m) unlimited
open files                      (-n) 65535
pipe size            (512 bytes, -p) 8
POSIX message queues     (bytes, -q) 819200
real-time priority              (-r) 0
stack size              (kbytes, -s) 8192
cpu time               (seconds, -t) unlimited
max user processes              (-u) 249047
virtual memory          (kbytes, -v) unlimited
file locks                      (-x) unlimited
```

这里设置的是`249047`，再检查root用户的ulimit设置：
```bash
cat /etc/security/limits.conf

root soft nofile 65535
root hard nofile 65535
* soft nofile 65535
* hard nofile 65535
```

* 从监控信息分析，故障时间区间，系统运行的线程略高 `31616`，但是该值却没有超过当前用户的 `ulimit -u` 的值，初步排除该线索。
  
* 根据系统抛出的错误提示，搜索到如下的Issues：[github issues](https://github.com/awslabs/amazon-eks-ami/issues/239)，并看到如下的信息

> One possible cause is running out of process IDs. Check you don't  have 40.000 defunct processes or similar on nodes with problems

于是进一步搜索，定位到一个可疑的系统参数：`kernel.pid_max`，其含义如下：这个参数约束了系统最大创建的进程和线程数量，如果超过这个值则会抛出`Resource temporarily unavailable，create No more processes`的错误。

检查当前系统该参数的值：
```bash
sysctl -a | grep pid_max

kernel.pid_max = 32768
```

## 优化方法
* 由于kubernetes平台单节点可能需要运行上百个容器，故可以提前根据实际业务调整`kernel.pid_max`的值；
