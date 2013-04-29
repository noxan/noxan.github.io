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

  $(function() {
    $('a[data-project]').click(function(evt) {
      var project = $(this).attr('data-project');
      $('#projects-modal > .modal-body').load('projects/'+project+'.html');
      $('#projects-modal-label').html(this.text);

      centerModal();
    });
  });

  $(window).resize(function() {
    centerModal();
  });
});
