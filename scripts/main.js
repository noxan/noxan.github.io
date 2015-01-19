function hasClass(elem, className) {
  return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
function addClass(elem, className) {
  if (!hasClass(elem, className)) {
    elem.className = (elem.className + ' ' + className).trim();
  }
}
function removeClass(elem, className) {
  var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
  if (hasClass(elem, className)) {
    while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
      newClass = newClass.replace(' ' + className + ' ', ' ');
    }
    elem.className = newClass.replace(/^\s+|\s+$/g, '');
  }
}

(function() {
  'use strict';
  var lastItem;

  var nav = document.querySelector('nav');
  var navItems = nav.querySelectorAll('a');

  console.log(navItems);

  var scrollItems = Array.prototype.map.call(navItems, function(item) {
    return item.getAttribute('href');
  });

  window.addEventListener('scroll', function() {
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    scrollTop = scrollTop + 32 + 1; // offset

    var currentItem = scrollItems.map(function(item) {
      var ele = document.getElementById(item.replace('#', ''));
      if(ele && ele.offsetTop < scrollTop) {
        return item;
      }
    });
    currentItem = currentItem.filter(function(item) {
      return item !== undefined;
    });
    currentItem = currentItem[currentItem.length - 1];

    if(lastItem !== currentItem) { // update menu
      if(lastItem) {
        removeClass(nav.querySelector('[href="' + lastItem + '"]').parentNode, 'active');
      }
      lastItem = currentItem;
      addClass(nav.querySelector('[href="' + currentItem + '"]').parentNode, 'active');
    }
  });
})();
