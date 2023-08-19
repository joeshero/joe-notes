// nav
export default [
    {text: '首页', link: '/'},
    {
        text: '编程', link: '/code/',
        items: [
            {text: 'Java', link: '/java/'},
            {text: '集合', link: '/collection/'},
        ]
    },
    {text: '关于', link: '/pages/df23a3/'},
    {text: '友链', link: '/friends/'},
    // { text: '推广', link: '/geektime/' },
    // { text: '索引', link: '/categories/',
    //   items: [
    //     { text: '分类', link: '/categories/' },
    //     { text: '标签', link: '/tags/' },
    //     { text: '归档', link: '/archives/' },
    //   ],
    // },
    {
        text: '页面',
        link: '/nav/',
        items: [
            {
                text: '本站索引',
                items: [
                    {text: '分类', link: '/categories/'},
                    {text: '标签', link: '/tags/'},
                    {text: '归档', link: '/archives/'},
                ],
            },
            {
                text: '我的工具',
                items: [
                    {text: '备忘录清单', link: 'https://ref.eryajf.net'},
                    {text: '网站状态', link: 'http://uptime.eryajf.net/dashboard'},
                    {text: 'json2go', link: 'http://public.eryajf.net/json2go'},
                    {text: '微信MD编辑', link: 'http://public.eryajf.net/mdnice'},
                    {text: '国内镜像', link: 'http://public.eryajf.net/mirror'},
                    {text: '出口IP查询', link: 'http://ip.eryajf.net'},
                    {text: '代码高亮工具', link: 'http://public.eryajf.net/highlight/'},
                ]
            },
            {
                text: '外站页面',
                items: [
                    {text: '开往', link: 'https://www.travellings.cn/go.html'},
                    {text: 'ldapdoc', link: 'http://ldapdoc.eryajf.net'},
                    {text: 'HowToStartOpenSource', link: 'https://eryajf.github.io/HowToStartOpenSource'},
                    {text: 'vdoing-template', link: 'https://eryajf.github.io/vdoing-template/'},
                ]
            }
        ],
    },
]