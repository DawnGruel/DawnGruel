// var langs = [
//     { title: '简体中文', path: '/home' }
// ]

var $config = {
    debug: true,
    tocVisibleDepth: 2,
    //目录
    // home: '/basis/HTML5',
    nav: [{
            title: '基础知识',
            type: 'dropdown',
            items: [
                { title: 'HTML5', path: '/basis/HTML5'},
                { title: 'CSS3', path: '/basis/CSS3'},
            ]
        },
        { title: 'ES6', path: '/ES6/ES6'},
        { title: 'webpack', path: '/webpack/'},
    ],
    //   plugins: [
    //   docsearch({
    //     apiKey: '65360cf9a91d87cd455d2b286d0d89ee',
    //     indexName: 'H5',
    //     // docsearch 允许你把抓取的内容按照 tag 分类
    //     // 详情请联系 algolia 客服，这里你只需要把你想搜索的 tag 填进来就行了
    //   })
    // ],
    // // 这个插件同时需要你的 URL
    // // 因为 docsearch 是按照你的线上 URL 抓取内容的
    // url: 'https://docute.js.org'
     plugins: [
    docsearch({
      apiKey: '65360cf9a91d87cd455d2b286d0d89ee',
        indexName: 'DawnGruel',
        tags:['ES6','basis','webpack']
      url: 'https://dylan-wy.github.io'
    }),
  ]
}
docute.init($config)
