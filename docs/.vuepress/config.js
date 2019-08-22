module.exports = {
    base: '/',
    title: '我的个人首页',
    description: '这是描述',
    themeConfig: {
        // 你的GitHub仓库，请正确填写
        repo: 'https://github.com/foreverxhj/foreverxhj.github.io.git',
        // 自定义仓库链接文字。
        repoLabel: 'My GitHub',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'FirstBlog', link: '/blog/FirstBlog.md' }
        ],
        sidebar: [
            ['/', '首页'],
            ['/blog/FirstBlog.md', 'FirstBlog']
          ]
    }
}