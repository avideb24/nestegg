$(document).ready(function(){

    /****mobile menu****/
    $('.menu-btn').click(function(){
        $('.header-top-right').slideToggle();
    })


    /***page top button***/
    $('.page-top-btn').click(function(){
        $('html, body').animate({scrollTop: 0},500)
    })





})










