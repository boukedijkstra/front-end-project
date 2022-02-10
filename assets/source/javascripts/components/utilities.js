const utilities = () => {

  const init = () => {

    closeTopBar();
    closeCookies();
    productTabs();
    addToCart();
    collectionPage();

  };

  // close the pink bar at the top
  const closeTopBar = () => {
    $('#close-top-bar').click(() => {
      $('.top-bar').slideUp(300);
    });
  };

  // close the cookies pop-up
  const closeCookies = () => {
    $('#close-cookies').click(() => {
      $('.cookies').fadeOut(300);
    });
    $('#accept-cookies').click(() => {
      $('.cookies').fadeOut(300);
    });
  };

  // Any link with an .add-to-cart class will show the cart-added box and disappear after 3 seconds
  const addToCart = () => {
    $('.add-to-cart').click(function (e) {
      e.preventDefault();
      $('.cart-added').slideDown(300);
      setTimeout(function () {
        $('.cart-added').fadeOut(300);
      }, 3000);
    });

    $('#close-cart-added').click(function (e) {
      e.preventDefault();
      $('.cart-added').fadeOut(300);
    });
  };

  // the tabs on the product page
  // buttons have a data-tab parameter
  // content linked to those buttons have a data-tab-content parameter with the same value
  const productTabs = () => {
    $('[data-tab]').click(function(e) {
      e.preventDefault();
      let el = $(this);
      if($(this).hasClass('active')) {
        $(this).removeClass('active');
        $('[data-tab-content]').slideUp(300);
      } else {
        $('[data-tab]').removeClass('active');
        el.addClass('active');
        $('[data-tab-content]').hide();
        $('[data-tab-content="' + el.attr('data-tab') + '"]').slideDown(300);
      }
    })
  };

  // showing and hiding the filter and sort buttons on the collection page
  const collectionPage = () => {
    $('.sort-button').click(function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
    });
    $('.filter-group-title').click(function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
    });
    $('.filter-button').click(function(e) {
      e.preventDefault();
      $('.filter-groups').slideToggle(300);
    });
    $('.filter-item-button').click(function(e) {
      e.preventDefault();
      $(this).toggleClass('js-active');
    });
  };


  return {
    init
  }
};

export default utilities();
