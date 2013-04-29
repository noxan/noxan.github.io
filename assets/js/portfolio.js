!function ($) {
  $(function() {
    $('#myCarousel').carousel();
  });
}(window.jQuery);

$(function() {
  function centerModal() {
    $('#projects-modal').css({
      'top': function () {
        return ($(window).height()-$(this).height())/2;
      }
    });
  }

  centerModal();

  $(window).resize(function() {
    centerModal();
  });
});
