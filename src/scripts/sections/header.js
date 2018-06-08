/**
 * Product Template Script
 * ------------------------------------------------------------------------------
 * A file that contains scripts highly couple code to the Header template.
 *
   * @namespace header
 */

(function() {

  function checkHeaderShrink() {
    var width = $(window).width();
    var scrollTop = Math.max($(document).scrollTop(), $('.body').scrollTop());
    if ((scrollTop > 20) && (width >= BP_MEDIUM)) {
      $('.page-header').addClass('shrink');
    } else {
      $('.page-header').removeClass('shrink');
    }
  }

  function setParallax(enabled) {
    /* var $body = $(document.body);
    var wasEnabled = $body.hasClass('parallax');
    if (wasEnabled == !!enabled) return;
    if (enabled) {
      var scrollTop = $(document).scrollTop();
      $body.addClass('parallax');
      $('.body').scrollTop(scrollTop);
    } else {
      var scrollTop = $('.body').scrollTop();
      $body.removeClass('parallax');
      $(document).scrollTop(scrollTop);
    } */
  }

  function setMobileMenu(open) {
    $('.page-header .main-menu ul').toggleClass('open', open);
  }

  function handleCloseMenu(event) {
    // Menu is open
    if (!$('.page-header .main-menu ul').hasClass('open')) return;
    // Mobile view is active
    if ($(window).width() > 800) {  
      setMobileMenu(false);
      return;
    }
    // Menu wasn't clicked
    if ($('.page-header .main-menu ul')[0] == event.target) return;
    if ($.contains($('.page-header .main-menu ul')[0], event.target)) return;
    // Prevent propogation
    event.preventDefault();
    event.stopPropagation();
    // Close the menu
    setMobileMenu(false);
  }

  $(function() {
    $(document).add('.body').scroll(checkHeaderShrink);
    $(window).resize(checkHeaderShrink);
    checkHeaderShrink();

    if ($('.banner-section').length) {
      setParallax($(window).width() > 800);
      $(window).resize(function() {
        setParallax($(window).width() > 800);
      });
    }

    document.body.addEventListener('click', handleCloseMenu, true);
    document.body.addEventListener('touchstart', handleCloseMenu, true);

    $('.mobile-nav-button').click(function() {
      setMobileMenu(true);
    });
  });

})();
