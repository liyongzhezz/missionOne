(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{412:function(a,e,c){a.exports=c.p+"assets/img/pid-namespace-shell.2fc56b85.png"},413:function(a,e,c){a.exports=c.p+"assets/img/cgroup.f167e2fa.png"},426:function(a,e,c){"use strict";c.r(e);var s=c(2),v=Object(s.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"}),e("p",[a._v("namespace和cgroup是容器技术的基石，namespace的主要作用是封装抽象，限制，隔离，使命名空间内的进程看起来拥有他们自己的全局资源；cgroup的主要作用是管理资源的分配、限制；。")])]),e("h2",{attrs:{id:"namespace"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#namespace"}},[a._v("#")]),a._v(" namespace")]),a._v(" "),e("h3",{attrs:{id:"namespace概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#namespace概念"}},[a._v("#")]),a._v(" namespace概念")]),a._v(" "),e("p",[a._v("namespace 是 Linux 内核的一项特性，用于进程间资源隔离的一种技术。将全局的系统资源包装在一个抽象里，让进程（看起来）拥有独立的全局资源实例。同时 Linux 也默认提供了多种 namespace，用于对多种不同资源进行隔离。")]),a._v(" "),e("h3",{attrs:{id:"namespace分类和调用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#namespace分类和调用"}},[a._v("#")]),a._v(" namespace分类和调用")]),a._v(" "),e("p",[a._v("目前有6种namespace：")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("mnt")]),a._v("： 文件系统；")]),a._v(" "),e("li",[e("code",[a._v("pid")]),a._v("： 进程；")]),a._v(" "),e("li",[e("code",[a._v("net")]),a._v("： 网络；")]),a._v(" "),e("li",[e("code",[a._v("ipc")]),a._v("： 系统进程通信；")]),a._v(" "),e("li",[e("code",[a._v("uts")]),a._v("： hostname；")]),a._v(" "),e("li",[e("code",[a._v("user")]),a._v("： 用户")])]),a._v(" "),e("p",[a._v("有三种系统调用方式：")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("clone")]),a._v("：创建新的进程和新的namespace，新创建的进程 attach 到新创建的 namespace；")]),a._v(" "),e("li",[e("code",[a._v("unshare")]),a._v("：不创建新的进程，创建新的 namespace 并把当前进程 attach 上；")]),a._v(" "),e("li",[e("code",[a._v("setns")]),a._v("： attach 进程到已有的 namespace 上；")])]),a._v(" "),e("p",[a._v("shell 也提供了一个和系统调用同名的 unshare 命令可以非常简单的创建 namespace，如下：")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("unshare "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--fork")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--pid")]),a._v(" --mount-proc "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("bash")]),a._v("\n")])])]),e("p",[a._v("这样创建了一个新的 PID namespace 并在里面运行了 bash，在这个 namespace 里就只有两个进程了。")]),a._v(" "),e("p",[e("img",{attrs:{src:c(412),alt:"pid namespace"}})]),a._v(" "),e("h3",{attrs:{id:"namespace生命周期"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#namespace生命周期"}},[a._v("#")]),a._v(" namespace生命周期")]),a._v(" "),e("p",[a._v("正常来说，一个namespace中的最后一个进程退出后，这个namespace的生命周期就结束了，但是会存在如下的一些特殊情况导致最后一个进程已经退出了，namespace 仍不能被销毁：")]),a._v(" "),e("ol",[e("li",[e("p",[e("code",[a._v("/proc/[pid]/ns/*")]),a._v(" 中的文件被打开或者 mount ，即使最后一个进程退出，也不能被销毁；")])]),a._v(" "),e("li",[e("p",[a._v("namespace 存在分层，子 namespace 仍存在 ，即使最后一个进程退出，也不能被销毁；")])]),a._v(" "),e("li",[e("p",[a._v("一个 user namespace 拥有一些非 user namespace （比如拥有 PID namespace 等其他的 namespace 存在），即使最后一个进程退出，也不能被销毁；")])]),a._v(" "),e("li",[e("p",[a._v("对于 PID namespace 而言，如果与 "),e("code",[a._v("/proc/[pid]/ns/pid_for_children")]),a._v("  存在关联关系时，即使最后一个进程退出，也不能被销毁;")])])]),a._v(" "),e("h2",{attrs:{id:"cgroup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cgroup"}},[a._v("#")]),a._v(" cgroup")]),a._v(" "),e("h3",{attrs:{id:"cgroup概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cgroup概念"}},[a._v("#")]),a._v(" cgroup概念")]),a._v(" "),e("p",[a._v("cgroup 是 Linux 内核的一个功能，用来限制、控制与分离一个进程组的资源（如CPU、内存、磁盘输入输出等）；")]),a._v(" "),e("p",[a._v("cgroup 到目前为止，有两个大版本， "),e("code",[a._v("cgroup v1")]),a._v(" 和 "),e("code",[a._v("v2")]),a._v(" 。")]),a._v(" "),e("blockquote",[e("p",[a._v("以下内容以 cgroup v2 版本为主")])]),a._v(" "),e("p",[a._v("cgroup 主要限制的资源包括："),e("code",[a._v("CPU")]),a._v("、"),e("code",[a._v("内存")]),a._v("、"),e("code",[a._v("网络")]),a._v("、"),e("code",[a._v("磁盘 I/O")]),a._v("；")]),a._v(" "),e("p",[a._v("当我们将可用系统资源按特定百分比分配给 cgroup 时，剩余的资源可供系统上的其他 cgroup 或其他进程使用。")]),a._v(" "),e("p",[a._v("一般cgroups 挂载在 "),e("code",[a._v("/sys/fs/cgroup")]),a._v("下：")]),a._v(" "),e("p",[e("img",{attrs:{src:c(413),alt:"cgroup"}})]),a._v(" "),e("p",[a._v("内核会读取这些信息来调度资源分配给每个进程。")]),a._v(" "),e("h3",{attrs:{id:"cgroup组成"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cgroup组成"}},[a._v("#")]),a._v(" cgroup组成")]),a._v(" "),e("p",[a._v("cgroup 代表"),e("code",[a._v("控制组 cgroup controller")]),a._v("，是一种分层组织进程的机制，沿层次结构以受控的方式分配系统资源。cgroup 主要有两个组成部分：")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("core")]),a._v(" : 负责分层组织过程；")]),a._v(" "),e("li",[e("code",[a._v("controller")]),a._v(" ：负责沿层次结构分配特定类型的系统资源；")])]),a._v(" "),e("p",[a._v("每个 cgroup 都有一个 "),e("code",[a._v("cgroup.controllers")]),a._v(" 文件，其中列出了所有可供 cgroup 启用的控制器。当在 "),e("code",[a._v("cgroup.subtree_control")]),a._v(" 中指定多个控制器时，要么全部成功，要么全部失败。在同一个控制器上指定多项操作，那么只有最后一个生效。每个 cgroup 的控制器销毁是异步的，在引用时同样也有着延迟引用的问题；")]),a._v(" "),e("h3",{attrs:{id:"cgroup归属和迁移"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cgroup归属和迁移"}},[a._v("#")]),a._v(" cgroup归属和迁移")]),a._v(" "),e("p",[a._v("系统中的每个进程都属于一个 cgroup，一个进程的所有线程都属于同一个 cgroup。")]),a._v(" "),e("p",[a._v("一个进程可以从一个 cgroup 迁移到另一个 cgroup 。进程的迁移不会影响现有的后代进程所属的 cgroup。")]),a._v(" "),e("blockquote",[e("p",[a._v("跨 cgroup 迁移进程是一项代价昂贵的操作并且有状态的资源限制（例如，内存）不会动态的应用于迁移。因此，经常跨 cgroup 迁移进程只是作为一种手段。不鼓励直接应用不同的资源限制。")])])])}),[],!1,null,null,null);e.default=v.exports}}]);