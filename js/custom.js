//------------------------------------------- HTML Importer
$(function () {
    $("#sidebar").load("../common/sidebar.html");
    $(".slide-four").load("../common/slide-four.html");
});

// ----------------------------------------------- PreLoader
const loadFix = () => {
    setTimeout(function () {
        $(".spinner-wrapper").fadeOut();
    }, 100)
}
// ----------------------------------------------- Gallery 2 Scroll Hint for Web Development Page
const hideHint = () => {
    if ($(".img-preview-container").scrollTop() !== 0) {
        $(".scroll-hint")[0].style.opacity = "0";
    }
    else {
        $(".scroll-hint")[0].style.opacity = "1";
    }
}
// ---------------------------------------------------------  Scroll Back To Top
// Vertical Setting
$(document).ready(function () {
    $(window).scroll(() => {
        if ($(window)[0].pageYOffset > 10) {
            $(".to-top").addClass("reveal");
        } else {
            $(".to-top").removeClass("reveal");
        }
    })
    // Horizontal Setting
    $(".outer-wrapper").scroll(() => {
        if ($(".outer-wrapper").scrollTop() > 100) {
            $(".to-top").addClass("reveal");
        } else {
            $(".to-top").removeClass("reveal");
        }
    })

    $(".to-top").click(() => {
        $(".slide-one")[0].scrollIntoView();
    })
})