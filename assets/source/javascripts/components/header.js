const header = () => {
    const init = () => {
        headerFunctions();
    };


    const headerFunctions = () => {

        // dropdown items in header menu. slideDown on mouseover and slideUp on mouseleave
        const dropdownMenuItem = $('.dropdown-menu-item');
        dropdownMenuItem.mouseover(function (e) {
            e.preventDefault();
            let dropdown = $(this).children('.child-dropdown-menu');
            if(!$(this).hasClass('js-active')) {
                dropdown.slideDown(300);
                $(this).addClass('js-active');
            }
        });
        dropdownMenuItem.mouseleave(function (e) {
            e.preventDefault();
            let dropdown = $(this).children('.child-dropdown-menu');
            if($(this).hasClass('js-active')) {
                dropdown.hide();
                $(this).removeClass('js-active');
            }
        });

        // header-desktop-sticky class makes header smaller on scroll. Use GSAP instead???
        const headerDesktop = $('.header-desktop');
        $(document).scroll(function() {
            if($(document).scrollTop() > 0) {
                if(!headerDesktop.hasClass('header-desktop-sticky')) {
                    headerDesktop.addClass('header-desktop-sticky');
                }
            } else {
                if(headerDesktop.hasClass('header-desktop-sticky')) {
                    headerDesktop.removeClass('header-desktop-sticky');
                }
            }
        });

        // show search form on click
        $('#search-button').click(function(e) {
            e.preventDefault();
            $('#header-search-field').slideToggle(300);
        });
        $('#close-search').click(function (e) {
            e.preventDefault();
            $('#header-search-field').fadeOut(300);
        });

        // Mobile menu dropdown
        $('#mobile-menu-toggle').click(function(e) {
            e.preventDefault();
            if($(this).hasClass('js-open')) {
                $('#mobile-menu-bars').show();
                $('#mobile-menu-close').hide();
            } else {
                $('#mobile-menu-bars').hide();
                $('#mobile-menu-close').show();
            }
            $('.header-mobile__dropdown').slideToggle(300);
            $(this).toggleClass('js-open');
        });

        // Dropdown items inside mobile menu
        $('.mobile-dropdown-menu-item__button').click(function (e) {
            e.preventDefault();
            let dropdown = $(this).next();
            if(!$(this).hasClass('js-active')) {
                dropdown.slideDown(300);
                $(this).addClass('js-active');
            } else {
                dropdown.slideUp(300);
                $(this).removeClass('js-active');
            }
        });

    };


    return {
        init,
    }
};

export default header()
