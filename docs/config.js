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
    ] 
}
docute.init($config)
