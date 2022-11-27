module.exports = {
    title: 'MissionOne',
    description: "只有一个Mission",
    base: '/missionOne/',
    theme: "reco",
    themeConfig: {
        authorAvatar: '/avator.jpeg',
        blogConfig: {
            category: {
                location: 2,
                text: "分类"
            },
            tag: {
                location: 3,
                text: "标签"
            },
        },
        nav: [
            { text: "首页", link: "/", icon: 'reco-home' },
            { 
                text: "找到我", 
                items: [
                    { text: "Github", link: "https://github.com/liyongzhezz", icon: 'reco-github' }
                ]
            }
        ],
        sidebar: [
            {
                title: "欢迎访问",
                path: "/",
                collapsable: false,
                children: [{ title: "博客简介", path: "/" }]
            },
            {
                title: "Docker",
                path: "/Docker/docker的网络模式",
                collapsable: true,
                children: [
                    { title: "Docker的网络模式", path: "/Docker/docker的网络模式"}
                ]
            },
            {
                title: "Kubernetes常见问题",
                path: "/Kubernetes常见问题/kernel.pid_max引起的问题",
                collapsable: true,
                children: [
                    { title: "kernel.pid_max引发的集群问题", path: "/Kubernetes常见问题/kernel.pid_max引起的问题"}
                ]
            },
            {
                title: "算法",
                path: "/算法/滑动窗口",
                collapsable: true,
                children: [
                    { title: "滑动窗口算法", path: "/算法/滑动窗口"}
                ]
            }
        ],
        subSidebar: "auto"
    },
    locales: {
        "/": { lang: "zh-CN" }
    },
    plugins: [
        ['vuepress-plugin-code-copy', {
            color: '#27b1ff',
            successText: "复制成功",
            staticIcon: true
        }],
        ['cursor-effects', {
            size: 2, // size of the particle, default: 2
            shape: 'circle', // ['star' | 'circle'], // shape of the particle, default: 'star'
            zIndex: 999999999, // z-index property of the canvas, default: 999999999
        }],
        
    ],
    head: [
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ]
}
