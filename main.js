$(function () {
    var menuHidden = $(".menu_hover");
    $('.menu').on('click',function () {
        $(menuHidden).css('display','flex');
    })
    $('.close').on('click',function () {
        $(menuHidden).css('display','none')
    })
})