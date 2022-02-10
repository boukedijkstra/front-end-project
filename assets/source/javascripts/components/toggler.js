const toggler = () => {

    const init = () => {
        // All elements that need toggle functionality
        toggle('.faq__item__question-container', '.faq__item__answer-container', true);
        toggle('.product-info__tab-title', '.product-info__tab-content', false);
    };

    const toggle = (title, content, scroll) => {
        $(title).click(function (e) {
            e.preventDefault();

            if ($(this).hasClass('js-open')) {
                $(title).removeClass('js-open');
                $(content).slideUp(300);
            } else {
                $(title).removeClass('js-open');
                $(content).slideUp(300);
                $(this).toggleClass('js-open');
                $(this).next().slideDown(300);
                if(scroll) {
                    let el = $(this);
                    setTimeout(function () {
                        var offset = el.offset();
                        offset.top -= 200;
                        $('html, body').animate({
                            scrollTop: offset.top
                        });
                    }, 301);
                }
            }
        });
    };

    return {
        init
    }
};

export default toggler();