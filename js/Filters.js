//---------------------------------------------------------------------- Filters Button
let count = 0;

const openFilters = (height) => {
    if (count == 0) {
        $("#sticky-button")[0].style.boxShadow = "none";
        $("#filters")[0].style.boxShadow = "0px 0px 10px #d9d9d9";
        $(".fas.fa-angle-down").fadeOut();
        $(".fas.fa-angle-up").fadeIn();
        $("#filters")[0].style.height = `${height}rem`;
        count += 1;
    }
    else {
        $("#sticky-button")[0].style.boxShadow = "0px 0px 10px #d9d9d9";
        $("#filters")[0].style.boxShadow = "none";
        $(".fas.fa-angle-down").fadeIn();
        $(".fas.fa-angle-up").fadeOut();
        $("#filters")[0].style.height = "0";
        count -= 1;
    }
}

$(document).ready(function () {

    $(window).scroll(() => {
        if (count === 1) {
            $("#sticky-button")[0].style.boxShadow = "0px 0px 10px #d9d9d9";
            $("#filters")[0].style.boxShadow = "none";
            $(".fas.fa-angle-down").fadeIn();
            $(".fas.fa-angle-up").fadeOut();
            $("#filters")[0].style.height = "0";
            count -= 1;
        }
    })
    $('.outer-wrapper,.sample-description').scroll(() => {
        if (count === 1) {
            $("#sticky-button")[0].style.boxShadow = "0px 0px 10px #d9d9d9";
            $("#filters")[0].style.boxShadow = "none";
            $(".fas.fa-angle-down").fadeIn();
            $(".fas.fa-angle-up").fadeOut();
            $("#filters")[0].style.height = "0";
            count -= 1;
        }
    })
})