const ContentLoader = async (page, siteLang) => {
    // --------------------------------------------------------------------- Architecture
    // ----------------------------------------------------------------------------------
    if (page === 'architecture') {
        const responce = await import('../contents/Architecture/ArchitectureContent.js')
        responce.ArchitectureContent.forEach((item) => {
            // -------------------------------------------
            let firstGalleryItem = String.raw`
                <div class="cards-item photos">
                    <img src=${item.src} alt="imazh,architecture">
                </div>
            `
            $('.cards').append(firstGalleryItem)
            // --------------------------------------------
            let secondGalleryItem = String.raw`
                <div class="img-card">
                    <div class="card-photo-container">
                        <img src=${item.src} alt="imazh,architecture">
                    </div>
                    <div class="img-details">
                        <h3>${siteLang === 'en' ? item.enTitle : item.title}</h3>
                        <p>${siteLang === 'en' ? item.enText : item.text}</p>
                    </div>
                </div>
            `
            $('.img-list').append(secondGalleryItem)
            //-----------------------------------------------
            let modalItem = String.raw`
                <li class="splide__slide">
                    <img src='${item.src}' alt="imazh,architecture">
                </li>
            `
            $('.splide__list').append(modalItem)
        })
    }

    // -------------------------------------------------------------------- Development
    // ----------------------------------------------------------------------------------

    else if (page === 'development') {
        const responce = await import('../contents/Development/Development.js')
        responce.DevelopmentContent.forEach((item) => {
            // -------------------------------------------
            let firstGalleryItem = String.raw`
                <div class="cards-item">
                    <img src=${item.src} alt="imazh,development">
                </div>
            `
            $('.cards').append(firstGalleryItem)
            // --------------------------------------------
            let secondGalleryItem = String.raw`
                <div class='img-card ${item.class}'>
                    <div class="card-web-container">
                        <img src=${item.srcFull ? item.srcFull : item.src} alt="imazh,development">
                    </div>
                    <div class="img-details">
                        <h3>${siteLang === 'en' ? item.enTitle : item.title}</h3>
                        <p>${siteLang === 'en' ? item.enText : item.text}</p>
                    </div>
                </div>
            `
            $('.img-list').append(secondGalleryItem)
        })
    }

    // -------------------------------------------------------------------- Digital Marketing
    // ----------------------------------------------------------------------------------

    else if (page === 'content-writing') {
        const responce = await import('../contents/DigitalMarketing/ContentWriting.js')
        responce.ContentWritingContent.forEach((item) => {
            // -------------------------------------------
            let firstGalleryItem = String.raw`
                <div class="cards-item">
                    <img src=${item.src} alt="imazh,digital-marketing,content-writing">
                </div>
            `
            $('.cards').append(firstGalleryItem)
            // --------------------------------------------
            let secondGalleryItem = String.raw`
                <div class="img-card">
                    <div class="card-photo-container">
                        <img src=${item.src} alt="imazh,digital-marketing,content-writing">
                    </div>
                    <div class="img-details">
                        <h3>${siteLang === 'en' ? item.enTitle : item.title}</h3>
                    </div>
                </div>
            `
            $('.img-list').append(secondGalleryItem)
            // //-----------------------------------------------
            let modalItem = String.raw`
                <li class="splide__slide">
                    <img src='${item.src}' alt="imazh,digital-marketing,content-writing">
                </li>
            `
            $('.splide__list').append(modalItem)
        })
    }
    else if (page === 'digital-marketing') {
        const responce = await import('../contents/DigitalMarketing/DigitalMarketing.js')
        responce.DigitalMarketingContent.forEach((item) => {
            // -------------------------------------------
            let firstGalleryItem = String.raw`
                <div class="cards-item">
                    <img src=${item.src} alt="imazh,digital-marketing">
                </div>
            `
            $('.cards').append(firstGalleryItem)
            // --------------------------------------------
            let secondGalleryItem = String.raw`
                <div class="img-card">
                    <div class="card-photo-container">
                        <img src=${item.src} alt="imazh,digital-marketing">
                    </div>
                    <div class="img-details">
                        <h3>${siteLang === 'en' ? item.enTitle : item.title}</h3>
                    </div>
                </div>
            `
            $('.img-list').append(secondGalleryItem)
            // //-----------------------------------------------
            let modalItem = String.raw`
                <li class="splide__slide">
                    <img src='${item.src}' alt="imazh,digital-marketing">
                </li>
            `
            $('.splide__list').append(modalItem)
        })
    }
    else if (page === 'social-media') {
        const responce = await import('../contents/DigitalMarketing/SocialMedia.js')
        responce.SocialMediaContent.forEach((item) => {
            // -------------------------------------------
            let firstGalleryItem = String.raw`
                <div class="cards-item">
                    <img src=${item.src} alt="imazh,digital-marketing,social-media">
                </div>
            `
            $('.cards').append(firstGalleryItem)
        })
    }

    // -------------------------------------------------------------------- Film Studio
    // ----------------------------------------------------------------------------------

    else if (page === 'film-studio') {
        const responce = await import('../contents/FilmStudio/FilmStudio.js')
        responce.FilmStudioContent.forEach((item) => {
            // -------------------------------------------
            let firstGalleryItem = String.raw`
                <div class="cards-item">
                    <img src=${item.src} alt="imazh,film-studio">
                </div>
            `
            $('.cards').append(firstGalleryItem)
            // --------------------------------------------
            let secondGalleryItem = String.raw`
                <div class="img-card">
                    <div>
                        <iframe width="100" height="100" src=${item.iframe}></iframe>
                    </div>
                    <div class="img-details">
                        <h3>${siteLang === 'en' ? item.enTitle : item.title}</h3>
                        <p>${siteLang === 'en' ? item.enText : item.text}</p>
                    </div>
                </div>
            `
            $('.img-list').append(secondGalleryItem)
        })
    }
    else if (page === 'documentary') {
        const responce = await import('../contents/FilmStudio/Documentary.js')
        responce.DocumentaryContent.forEach((item) => {
            // -------------------------------------------
            let firstGalleryItem = String.raw`
                <div class="cards-item">
                    <img src=${item.src} alt="imazh,film-studio,documentary">
                </div>
            `
            $('.cards').append(firstGalleryItem)
            // --------------------------------------------
            let secondGalleryItem = String.raw`
                <div class="img-card">
                    <div>
                        <iframe width="100" height="100" src=${item.iframe}></iframe>
                    </div>
                    <div class="img-details">
                        <h3>${siteLang === 'en' ? item.enTitle : item.title}</h3>
                        <p>${siteLang === 'en' ? item.enText : item.text}</p>
                    </div>
                </div>
            `
            $('.img-list').append(secondGalleryItem)
        })
    }
    else if (page === 'music-video') {
        const responce = await import('../contents/FilmStudio/MusicVideo.js')
        responce.MusicVideoContent.forEach((item) => {
            // -------------------------------------------
            let firstGalleryItem = String.raw`
                <div class="cards-item">
                    <img src=${item.src} alt="imazh,film-studio,music-video">
                </div>
            `
            $('.cards').append(firstGalleryItem)
            // --------------------------------------------
            let secondGalleryItem = String.raw`
                <div class="img-card">
                    <div>
                        <iframe width="100" height="100" src=${item.iframe}></iframe>
                    </div>
                    <div class="img-details">
                        <h3>${siteLang === 'en' ? item.enTitle : item.title}</h3>
                        <p>${siteLang === 'en' ? item.enText : item.text}</p>
                    </div>
                </div>
            `
            $('.img-list').append(secondGalleryItem)
        })
    }
    else if (page === 'short-film') {
        const responce = await import('../contents/FilmStudio/ShortFilm.js')
        responce.ShortFilmContent.forEach((item) => {
            // -------------------------------------------
            let firstGalleryItem = String.raw`
                <div class="cards-item">
                    <img src=${item.src} alt="imazh,film-studio,short-film">
                </div>
            `
            $('.cards').append(firstGalleryItem)
            // --------------------------------------------
            let secondGalleryItem = String.raw`
                <div class="img-card">
                    <div>
                        <iframe width="100" height="100" src=${item.iframe}></iframe>
                    </div>
                    <div class="img-details">
                        <h3>${siteLang === 'en' ? item.enTitle : item.title}</h3>
                        <p>${siteLang === 'en' ? item.enText : item.text}</p>
                    </div>
                </div>
            `
            $('.img-list').append(secondGalleryItem)
        })
    }
    else if (page === 'teaser') {
        const responce = await import('../contents/FilmStudio/Teaser.js')
        responce.TeaserContent.forEach((item) => {
            // -------------------------------------------
            let firstGalleryItem = String.raw`
                <div class="cards-item">
                    <img src=${item.src} alt="imazh,film-studio,teaser">
                </div>
            `
            $('.cards').append(firstGalleryItem)
            // --------------------------------------------
            let secondGalleryItem = String.raw`
                <div class="img-card">
                    <div>
                        <iframe width="100" height="100" src=${item.iframe}></iframe>
                    </div>
                    <div class="img-details">
                        <h3>${siteLang === 'en' ? item.enTitle : item.title}</h3>
                        <p>${siteLang === 'en' ? item.enText : item.text}</p>
                    </div>
                </div>
            `
            $('.img-list').append(secondGalleryItem)
        })
    }

    // -------------------------------------------------------------------- Graphic Design
    // -----------------------------------------------------------------------------------

    else if (page === 'graphic-design') {
        const responce = await import('../contents/GraphicDesign/GraphicDesign.js')
        responce.GraphicDesignContent.forEach((item) => {
            // -------------------------------------------
            let firstGalleryItem = String.raw`
                <div class="cards-item">
                    <img src=${item.src} alt="imazh,graphic-design">
                </div>
            `
            $('.cards').append(firstGalleryItem)
            // --------------------------------------------
            let secondGalleryItem = String.raw`
                <div class="img-card">
                    <div class="card-photo-container">
                        <img src=${item.src} alt="imazh,graphic-design">
                    </div>
                    <div class="img-details">
                        <h3>${siteLang === 'en' ? item.enTitle : item.title}</h3>
                    </div>
                </div>
            `
            $('.img-list').append(secondGalleryItem)
            // //-----------------------------------------------
            let modalItem = String.raw`
                <li class="splide__slide">
                    <img src='${item.src}' alt="imazh,graphic-design">
                </li>
            `
            $('.splide__list').append(modalItem)
        })
    }

    // -------------------------------------------------------------------- Modeling-Rendering
    // ----------------------------------------------------------------------------------

    else if (page === 'modeling-rendering') {
        const responce = await import('../contents/Modeling-Rendering/Modeling-Rendering.js')
        responce.ModelingRenderingContent.forEach((item) => {
            // -------------------------------------------
            let firstGalleryItem = String.raw`
                <div class="cards-item photos">
                    <img src=${item.src} alt="imazh,modeling-rendering">
                </div>
            `
            $('.cards').append(firstGalleryItem)
            // --------------------------------------------
            let secondGalleryItem = String.raw`
                <div class="img-card">
                    <div class="card-photo-container">
                        <img src=${item.src} alt="imazh,modeling-rendering">
                    </div>
                    <div class="img-details">
                        <h3>${siteLang === 'en' ? item.enTitle : item.title}</h3>
                        <p>${siteLang === 'en' ? item.enText : item.text}</p>
                    </div>
                </div>
            `
            $('.img-list').append(secondGalleryItem)
            // //-----------------------------------------------
            let modalItem = String.raw`
                <li class="splide__slide">
                    <img src='${item.src}' alt="imazh,modeling-rendering">
                </li>
            `
            $('.splide__list').append(modalItem)
        })
    }

    // -------------------------------------------------------------------- Motion Graphic
    // ----------------------------------------------------------------------------------

    else if (page === 'motion-graphic') {
        const responce = await import('../contents/MotionGraphic/MotionGraphic.js')
        responce.MotionGraphicContent.forEach((item) => {
            // -------------------------------------------
            let firstGalleryItem = String.raw`
                <div class="cards-item">
                    <img src=${item.src} alt="imazh,motion-graphic">
                </div>
            `
            $('.cards').append(firstGalleryItem)
            // --------------------------------------------
            let secondGalleryItem = String.raw`
                <div class="img-card">
                    <iframe width="100" height="100" src=${item.iframe}></iframe>
                    <div class="img-details">
                        <h3>${siteLang === 'en' ? item.enTitle : item.title}</h3>
                        <p>${siteLang === 'en' ? item.enText : item.text}</p>
                    </div>
                </div>
            `
            $('.img-list').append(secondGalleryItem)
        })
    }

    // -------------------------------------------------------------------- Photography Studio
    // ----------------------------------------------------------------------------------

    else if (page === 'photography-studio') {
        const responce = await import('../contents/PhotographyStudio/PhotographyStudio.js')
        responce.PhotographyStudioContent.forEach((item) => {
            // -------------------------------------------
            let firstGalleryItem = String.raw`
                <div class="cards-item photos">
                    <img src=${item.src} alt="imazh,photography-studio">
                </div>
            `
            $('.cards').append(firstGalleryItem)
            // --------------------------------------------
            let secondGalleryItem = String.raw`
                <div class="img-card">
                    <div class="card-photo-container">
                        <img src=${item.src} alt="imazh,photography-studio">
                    </div>
                    <div class="img-details">
                        <h3>${siteLang === 'en' ? item.enTitle : item.title}</h3>
                        <p>${siteLang === 'en' ? item.enText : item.text}</p>
                    </div>
                </div>
            `
            $('.img-list').append(secondGalleryItem)
            // //-----------------------------------------------
            let modalItem = String.raw`
                <li class="splide__slide">
                    <img src='${item.src}' alt="imazh,photography-studio">
                </li>
            `
            $('.splide__list').append(modalItem)
        })
    }
    else if (page === 'decorative') {
        const responce = await import('../contents/PhotographyStudio/Decorative.js')
        responce.DecorativeContent.forEach((item) => {
            // -------------------------------------------
            let firstGalleryItem = String.raw`
                <div class="cards-item photos">
                    <img src=${item.src} alt="imazh,photography-studio,decorative">
                </div>
            `
            $('.cards').append(firstGalleryItem)
            // --------------------------------------------
            let secondGalleryItem = String.raw`
                <div class="img-card">
                    <div class="card-photo-container">
                        <img src=${item.src} alt="imazh,photography-studio.decorative">
                    </div>
                    <div class="img-details">
                        <h3>${siteLang === 'en' ? item.enTitle : item.title}</h3>
                        <p>${siteLang === 'en' ? item.enText : item.text}</p>
                    </div>
                </div>
            `
            $('.img-list').append(secondGalleryItem)
            // //-----------------------------------------------
            let modalItem = String.raw`
                <li class="splide__slide">
                    <img src='${item.src}' alt="imazh,photography-studio,decorative">
                </li>
            `
            $('.splide__list').append(modalItem)
        })
    }
    else if (page === 'portrait') {
        const responce = await import('../contents/PhotographyStudio/Portrait.js')
        responce.PortraitContent.forEach((item) => {
            // -------------------------------------------
            let firstGalleryItem = String.raw`
                <div class="cards-item photos">
                    <img src=${item.src} alt="imazh,photography-studio,portrait">
                </div>
            `
            $('.cards').append(firstGalleryItem)
            // --------------------------------------------
            let secondGalleryItem = String.raw`
                <div class="img-card">
                    <div class="card-photo-container">
                        <img src=${item.src} alt="imazh,photography-studio,portrait">
                    </div>
                    <div class="img-details">
                        <h3>${siteLang === 'en' ? item.enTitle : item.title}</h3>
                        <p>${siteLang === 'en' ? item.enText : item.text}</p>
                    </div>
                </div>
            `
            $('.img-list').append(secondGalleryItem)
            // //-----------------------------------------------
            let modalItem = String.raw`
                <li class="splide__slide">
                    <img src='${item.src}' alt="imazh,photography-studio,portrait">
                </li>
            `
            $('.splide__list').append(modalItem)
        })
    }
    else if (page === 'product') {
        const responce = await import('../contents/PhotographyStudio/Product.js')
        responce.ProductContent.forEach((item) => {
            // -------------------------------------------
            let firstGalleryItem = String.raw`
                <div class="cards-item photos">
                    <img src=${item.src} alt="imazh,photography-studio,product">
                </div>
            `
            $('.cards').append(firstGalleryItem)
            // --------------------------------------------
            let secondGalleryItem = String.raw`
                <div class="img-card">
                    <div class="card-photo-container">
                        <img src=${item.src} alt="imazh,photography-studio,product">
                    </div>
                    <div class="img-details">
                        <h3>${siteLang === 'en' ? item.enTitle : item.title}</h3>
                        <p>${siteLang === 'en' ? item.enText : item.text}</p>
                    </div>
                </div>
            `
            $('.img-list').append(secondGalleryItem)
            // //-----------------------------------------------
            let modalItem = String.raw`
                <li class="splide__slide">
                    <img src='${item.src}' alt="imazh,photography-studio,product">
                </li>
            `
            $('.splide__list').append(modalItem)
        })
    }




    // ----------------------------------------------------------------- Settings
    // ------------------------------------------------------------------------------------------------
    // ---------------------------------------------------------------- Gallery 1 Width Fix
    $('.cards-item').addClass('hidden')

    if ($('.hidden').length > 6) {
        $('.hidden').slice(0, 6).removeClass('hidden')
    } else {
        $('.cards-item').removeClass('hidden')
        $('#load-more').fadeOut()
    }
    if (window.matchMedia("(min-width :992px)").matches) {
        if ($('.cards-item').length > 3) {
            $('.cards').outerWidth(2 * ($('.cards-item').outerWidth()))
        }
        else {
            $('.cards').outerWidth(1 * ($('.cards-item').outerWidth()))
        }
    }
    // ---------------------------------------------------------------  Gallery 1 Scroll Left
    Array.from($('.cards-item img')).map((item, index) => {
        if ($('.slide-three').length !== 0) {
            $(item).click(() => {
                $('.img-card')[index].click();

                $(".slide-three")[0].scrollIntoView();
            })
        }
    })
    // ---------------------------------------------------------------------  Gallery 2 Preview
    Array.from($('.img-card')).map((item) => {
        $(item).click(() => {
            $('#prev-title')[0].innerHTML = item.children[1].children[0].innerHTML;
            if ($('#details').length !== 0) {
                $('#details')[0].innerHTML = item.children[1].children[1].innerHTML;
            }

            if (item.children[0].children[0]) {
                $('#preview')[0].src = item.children[0].children[0].src;
            } else {
                $('#preview')[0].src = item.children[0].src;
            }

            if ($('.web-page').length !== 0) {
                if ($(item).hasClass('not-site')) {
                    $('.scroll-hint').hide()
                } else {
                    $('.scroll-hint').show()
                }
            }
        })
    })
    if ($('#preview').length !== 0) {
        if ($('.img-card img').length !== 0) {
            $('#preview')[0].src = $('.img-card img')[0].src
        } else {
            $('#preview')[0].src = $('.img-card iframe')[0].src
        }
    }
    if ($('#prev-title').length !== 0) {
        $('#prev-title')[0].innerHTML = $('.img-card')[0].children[1].children[0].innerHTML;
    }
    if ($('#details').length !== 0) {
        $('#details')[0].innerHTML = $('.img-card')[0].children[1].children[1].innerHTML;
    }
    //---------------------------------------------------------------- Modal
    if ($('#modal').length !== 0) {

        $('#modal').hide()

        let modalDirection = ''
        if (siteLang === 'en') {
            modalDirection = 'ltr'
        } else {
            modalDirection = 'rtl'
        }

        new Splide('.splide', {
            type: 'slide',
            autoWidth: true,
            direction: modalDirection,
            gap: '30px',
            pagination: false
        }).mount();

        $('.splide__slide').each((index, item) => {
            $(item).click(() => {
                $('#modal-preview-img')[0].src = $(item).children()[0].src;
                $('.splide__slide').removeClass('is-previewed')
                $(item).addClass('is-previewed');
                $('.modal-hover-box h3')[0].innerHTML = $(`.img-card:nth-child(${index + 1}) h3`)[0].innerHTML
                if ($(`.img-card:nth-child(${index + 1}) p`).length !== 0) {
                    $('.modal-hover-box p')[0].innerHTML = $(`.img-card:nth-child(${index + 1}) p`)[0].innerHTML
                }
            })
        })
    }
}