$(function () {
    $(".login").on("click",function () {
        $(".login-bg").toggle();
        $(".jiantou").toggle();
    });
    // if($(document).width()<752){
    //     $(".over-x img").attr("src","img/lunbo2.jpg")
    // }
    // console.log($(document).width())
    $(".one-title>span").on("click",function () {
        $(this).parent().next().slideToggle();
    })
});