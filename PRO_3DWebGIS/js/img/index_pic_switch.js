$(document).ready(function () {
    var list = [{
        imgUrl: 'img/img_s1/a1.png',
        href: '#'
    }, {
        imgUrl: 'img/img_s1/a2.png',
        href: '#'
    }, {
        imgUrl: 'img/img_s1/a3.png',
        href: '#'
    }, {
        imgUrl: 'img/img_s1/a4.png',
        href: '#'
    }, {
        imgUrl: 'img/img_s1/a5.png',
        href: '#'
    }, {
        imgUrl: 'img/img_s1/a6.png',
        href: '#'
    }];
    $('#box').fade({
        url: list,
        boxWid: 1000,
        boxHei: 400
    }).css({
        margin: '0 auto'
    })
});