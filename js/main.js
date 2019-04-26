$(function () {
    var div = $('.work-img');
    var width = div.width();
    div.css('height', width);
});
$(".work-img").hover(function () {
    $(this).css("opacity", "0.6")
    $(".work-img-wrap").css("background-color", "rgba(231, 76, 60, 0.8")
    $(".work-hide").css("opacity", "1")
})
$(".work-img").mouseleave(function () {
    $(this).fadeTo(100, 1)
    $(".work-img-wrap").css("background-color", "0")
    $(".work-hide").css("opacity", "0")
})
$(function () {
    var height = $('#wraper').height()
    $('#form').css('height', height)
})
$("#keep-in-touch-a").click(function () {
    $('#keep-in-touch').html('Your message will be checked')
})
$(function () {
    $('a[href=""]').click(function () {
        return false;
    });
})
var ofefset = 0
function scrollToThe(id, ofefset) {
    if (ofefset == undefined) {
        ofefset = 0
        $('html, body').animate({
            scrollTop: $(id).offset().top - ofefset
        }, 1200)
    }
    else {
        $('html, body').animate({
            scrollTop: $(id).offset().top - ofefset
        }, 1200)
    }
}
function validate(form_id,email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var address = document.forms[form_id].elements[email].value;
    if(reg.test(address) == false) {
       alert('Введите корректный e-mail');
       return false;
    }
 }