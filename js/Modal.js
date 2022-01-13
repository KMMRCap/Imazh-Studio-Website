$('#preview').click((thisImage) => {
    if (window.matchMedia("(min-width :992px)").matches) {
        $('#modal-preview-img')[0].src = $('#preview')[0].src;
        $('.splide__slide').removeClass('is-previewed');
        $('.splide__slide').each((_, item) => {
            if ($(item).children()[0].src === $('#preview')[0].src) {
                $(item).addClass('is-previewed');
            }
        })
        $('.modal-hover-box h3')[0].innerHTML = $('#prev-title')[0].innerHTML
        if ($('#details').length !== 0) {
            $('.modal-hover-box p')[0].innerHTML = $('#details')[0].innerHTML
        }
        $('#modal').fadeIn()
        $('.is-previewed')[0].scrollIntoView()
    }
})

$('.backdrop').click(() => {
    $('#modal').fadeOut()
})
$('#modal .fa-times').click(() => {
    $('#modal').fadeOut()
})