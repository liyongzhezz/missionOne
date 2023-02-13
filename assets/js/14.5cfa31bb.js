(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{425:function(e,t,a){"use strict";a.r(t);var v=a(2),_=Object(v.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"title"}),t("p",[e._v("kubernetes上的垃圾回收，指的是回收节点上无用的容器和镜像，这个工作是由kubelet定期完成的")])]),t("h2",{attrs:{id:"垃圾回收周期"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收周期"}},[e._v("#")]),e._v(" 垃圾回收周期")]),e._v(" "),t("p",[e._v("kubelet每分钟会查询清理一次容器，每五分钟查询清理一次镜像。在kubelet刚启动时并不会立即进行GC，即第一次进行容器回收为kubelet启动一分钟后，第一次进行镜像回收为kubelet启动五分钟后。")]),e._v(" "),t("blockquote",[t("p",[e._v("不推荐使用其它管理工具或手工进行容器和镜像的清理，因为kubelet需要通过容器来判断pod的运行状态，如果使用其它方式清除容器有可能影响kubelet的正常工作")])]),e._v(" "),t("h2",{attrs:{id:"垃圾回收范围"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收范围"}},[e._v("#")]),e._v(" 垃圾回收范围")]),e._v(" "),t("ul",[t("li",[e._v("镜像的回收针对node结点上由docker管理的所有镜像，无论该镜像是否是在创建pod时pull的；")]),e._v(" "),t("li",[e._v("容器的回收策略只应用于通过kubelet管理的容器；")])]),e._v(" "),t("blockquote",[t("p",[e._v("kubelet是通过集成的cadvisor进行镜像的回收")])]),e._v(" "),t("h2",{attrs:{id:"垃圾回收策略配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收策略配置"}},[e._v("#")]),e._v(" 垃圾回收策略配置")]),e._v(" "),t("p",[e._v("kubelet支持如下的一些参数来配置垃圾回收策略：")]),e._v(" "),t("h3",{attrs:{id:"镜像回收"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#镜像回收"}},[e._v("#")]),e._v(" 镜像回收")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("--image-gc-high-threshold")]),e._v("：当存储镜像的磁盘使用率高于这个值的时候启动垃圾回收，删除最近最久未使用（LRU，Least Recently Used）的镜像；"),t("strong",[e._v("这个值是百分比；")])]),e._v(" "),t("li",[t("code",[e._v("--image-gc-low-threshold")]),e._v("：当启动垃圾回收清理磁盘后，直到磁盘使用率降到这个值或无镜像可以删除为止；"),t("strong",[e._v("这个值是百分比；")])])]),e._v(" "),t("p",[t("code",[e._v("--image-gc-high-threshold")]),e._v("的默认值为"),t("code",[e._v("90")]),e._v("，"),t("code",[e._v("--image-gc-low-threshold")]),e._v("的默认值为"),t("code",[e._v("80")]),e._v("；")]),e._v(" "),t("blockquote",[t("p",[e._v("当某个镜像重新pull或启动某个pod用到该镜像时，该镜像的最近使用时间会被更新")])]),e._v(" "),t("p",[e._v("这里注意一点，docker默认使用"),t("code",[e._v("/var/lib/docker")]),e._v("存储镜像，当docker使用自定义的磁盘空间如"),t("code",[e._v("/data")]),e._v("时，kubelet默认垃圾回收机制不生效，需要在kubelet启动时增加"),t("code",[e._v("--docker-root=")]),e._v("来指定docker数据目录才行。")]),e._v(" "),t("h3",{attrs:{id:"容器回收"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#容器回收"}},[e._v("#")]),e._v(" 容器回收")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("--minimum-container-ttl-duration")]),e._v("：从容器停止运行时经过这个值的时间后，将该容器标记为已过期可回收，"),t("strong",[e._v("这里只是标记并未直接回收")]),e._v("，值可以使用单位后缀，如h表示小时，m表示分钟，s表示秒；")]),e._v(" "),t("li",[t("code",[e._v("--maximum-dead-containers-per-container")]),e._v("：每个pod最多可保留这个数值个停止的容器；")]),e._v(" "),t("li",[t("code",[e._v("--maximum-dead-containers")]),e._v("：整个节点最多可保留这个值个停止的容器；")])]),e._v(" "),t("p",[t("code",[e._v("--minimum-container-ttl-duration")]),e._v("的默认值为1m，"),t("code",[e._v("--maximum-dead-containers-per-container")]),e._v("的默认值为2，"),t("code",[e._v("--maximum-dead-containers")]),e._v("默认值为100；")]),e._v(" "),t("blockquote",[t("p",[t("code",[e._v("--maximum-dead-containers")]),e._v("的优先级是高于"),t("code",[e._v("--maximum-dead-containers-per-container")]),e._v("的；")]),e._v(" "),t("p",[e._v("容器回收时是按照时间排序先回收创建时间最早的容器；")])]),e._v(" "),t("h3",{attrs:{id:"关闭容器垃圾回收"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关闭容器垃圾回收"}},[e._v("#")]),e._v(" 关闭容器垃圾回收")]),e._v(" "),t("p",[e._v("如果需要关闭容器的垃圾回收策略，可以将"),t("code",[e._v("--minimum-container-ttl-duration")]),e._v("设为0，表示无限制；"),t("code",[e._v("--maximum-dead-containers-per-container")]),e._v("和"),t("code",[e._v("--maximum-dead-containers")]),e._v("设为负数。")]),e._v(" "),t("h2",{attrs:{id:"垃圾回收流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收流程"}},[e._v("#")]),e._v(" 垃圾回收流程")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("遍历所有pod，使其满足"),t("code",[e._v("--maximum-dead-containers-per-container")]),e._v("；")])]),e._v(" "),t("li",[t("p",[e._v("经过上一步后如果不满足"),t("code",[e._v("--maximum-dead-containers")]),e._v("，计算值"),t("code",[e._v("X=（--maximum-dead-containers）/（pod总数）")]),e._v("，再遍历所有pod，使其满足已停止运行的容器集个数不大于X且至少为1；")])]),e._v(" "),t("li",[t("p",[e._v("经过以上两步后如果还不满足"),t("code",[e._v("--maximum-dead-containers")]),e._v("，则对所有已停止的容器排序，优先删除创建时间最早的容器直到满足"),t("code",[e._v("--maximum-dead-containers")]),e._v("为止;")])])])])}),[],!1,null,null,null);t.default=_.exports}}]);