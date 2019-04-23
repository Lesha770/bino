$(function() {
    var div = $('.work-img');
    var width = div.width();
    div.css('height', width);
});
$(".work-img").hover(function(){
    $(this).css("opacity", "0.6")
    $(".work-img-wrap").css("background-color", "rgba(231, 76, 60, 0.8")
    $(".work-hide").css("opacity", "1")
})
$(".work-img").mouseleave(function(){
    $(this).fadeTo(100, 1)
    $(".work-img-wrap").css("background-color", "0")
    $(".work-hide").css("opacity", "0")
})