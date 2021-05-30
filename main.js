$(function () {
    var menuHidden = $(".menu_hover");
    $('.menu').on('click',function () {
        $(menuHidden).css('display','block');
    })
    $('.close').on('click',function () {
        $(menuHidden).css('display','none')
    })
})