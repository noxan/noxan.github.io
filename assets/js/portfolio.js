!function ($) {
  $(function() {
    $('#myCarousel').carousel();
  });
}(window.jQuery);

$(function() {
  function centerModal() {
    $('#projects-modal').css({
      'margin-top': function () {
        return ($(window).height()-$(this).height())/2;
      },
      'top': 0
    });
  }

  $(function() {
    $('a[data-project]').click(function(evt) {
      var project = $(this).attr('data-project');
      $('#projects-modal-label').html(this.text);
      $('#projects-modal > .modal-body').load('projects/'+project+'.html', function(response, status, xhr) {
        centerModal();
      });
    });
  });

  $(window).resize(function() {
    centerModal();
  });

  centerModal();
});
