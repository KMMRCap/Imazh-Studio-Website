$('#load-more').click(() => {
    if ($('.hidden').length > 6) {
        if (window.matchMedia("(min-width :992px)").matches) {
            $('.cards').outerWidth(
                (2 * ($('.cards-item').outerWidth() + 32)) + $('.cards').outerWidth()
            )
        }
        $('.hidden').slice(0, 6).removeClass('hidden')
    }
    else {
        if (window.matchMedia("(min-width :992px)").matches) {
            $('.cards').outerWidth(
                (Math.ceil($('.hidden').length / 3) * ($('.cards-item').outerWidth()))
                + $('.cards').outerWidth()
            )
        }
        $('#load-more').hide()
        $('#load-less').fadeIn()
        $('.cards-item').removeClass('hidden')
    }
})

$('#load-less').click(() => {
    $('.cards-item').slice(6, $('.cards-item').length).addClass('hidden')
    $('#load-less').hide()
    $('#load-more').fadeIn()
    if (window.matchMedia("(min-width :992px)").matches) {
        $('.cards').outerWidth(2 * ($('.cards-item').outerWidth()))
    }
})

$(window).resize(() => {
    if (window.matchMedia("(min-width :992px)").matches) {
        let findCount = Math.ceil($('.cards-item:not(".hidden")').length) / 3
        $('.cards').outerWidth(findCount * ($('.cards-item').outerWidth()))
    }
})