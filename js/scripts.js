// scroll
$(document).ready(function () {
    var top = 0;
    $(window).on('scroll', function () {

        $("header").toggleClass("header-hide", $(window).scrollTop() > top);
        if ($(window).scrollTop() > 25) {
            $("header").addClass("bg-dark-header")
        } else {
            $("header").removeClass("bg-dark-header");
        }
        top = $(window).scrollTop();

    });
})
// owl Carousels
$(".slider-main").owlCarousel({
    margin: 10,
    loop: true,
    items: 4,
    rtl: true,
    nav: true,
    dots: false,
    responsiveClass: true,
    navSpeed: 400,
    dotsSpeed: 400,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 1
        },
        768: {
            items: 1
        },
        1200: {
            items: 2
        }
    }
});
$(".slider-product-arrivals").owlCarousel({
    margin: 10,
    loop: true,
    rtl: true,
    nav: true,
    dots: false,
    items: 1,
    navSpeed: 400,
    dotsSpeed: 400,
});
$('.owl-related-product').owlCarousel({
    loop: true,
    margin: 10,
    rtl: true,
    nav: true,
    responsiveClass: true,
    navSpeed: 400,
    dotsSpeed: 400,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        768: {
            items: 4
        },
        1200: {
            items: 4
        }
    }
})
// owl gallery
$('.owl-gallery').owlCarousel({
    thumbs: true,
    thumbsPrerendered: true,
    rtl: true,
    nav: true,
    dots: false,
    items: 1,
    navSpeed: 400,
    dotsSpeed: 400
});

// Modal
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})
$('.lavalamp').lavalamp({
    setOnClick: true,
    enableHover: false,
    margins: false,
    autoUpdate: true,
    duration: 200
});



// lick hover
let linckHover = document.querySelectorAll('.link-hover');
for (let i = 0; i < linckHover.length; i++) {
    const linkH = linckHover[i];
    linkH.addEventListener('mouseover', function () {
        let t = this
        let hovbot = t.firstChild.nextSibling;
        hovbot.style.width = "100%";
        hovbot.style.right = "0px";
        hovbot.style.left = "0px";
    })
    linkH.addEventListener('mouseout', function () {
        let s = this;
        let hovbotOn = s.firstChild.nextSibling;
        hovbotOn.style.width = "0px";
        hovbotOn.style.left = "0px";
        hovbotOn.style.right = "unset";

    })
}

// navbar portabl(z-index)
try {
    function Zindex() {
        let dropdownToggle = document.querySelectorAll('.dropdown-toggle');
        for (let i = 0; i < dropdownToggle.length; i++) {
            const dropdownsToggle = dropdownToggle[i];
            let accordion = document.querySelector('.accordion')
            if (dropdownsToggle.ariaExpanded == 'true') {
                accordion.style['z-index'] = "100"
            }
        }
    }
    setInterval(Zindex, 10)
} catch (error) {

}


// counter
$(document).ready(function () {

    $('.counter-plus').click(function () {

        var fieldID = $(this).attr('field'),
            fieldVal = parseInt($(this).prev('input[name=' + fieldID + ']').val());
        console.log(fieldID)
        if (!isNaN(fieldVal)) {
            $(this).prev('input[name=' + fieldID + ']').val(fieldVal + 1);
        } else {
            $(this).prev('input[name=' + fieldID + ']').val(0);
        }
    });

    $(".counter-minus").click(function () {

        var fieldID = $(this).attr('field'),
            fieldVal = parseInt($(this).next('input[name=' + fieldID + ']').val());

        if (!isNaN(fieldVal) && fieldVal > 0) {
            $(this).next('input[name=' + fieldID + ']').val(fieldVal - 1);
        } else {
            $(this).next('input[name=' + fieldID + ']').val(0);
        }
    });
});
// gallery
try {
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'alwaysShowNavOnTouchDevices': true,
        'disableScrolling': true,
    })
} catch (error) {

}
// 
// Launch Functions
try {
    const swiper = new Swiper('.swiper', {
        parallax: true,
        speed: 1500,
        loop: true,
        Pagination: true,
        simulateTouch: false,
        effect: 'fade',
        // Optional parameters
        direction: 'vertical',
        loop: true,
    
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
    
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    
    });
} catch (error) {
    
}