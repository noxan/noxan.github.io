(function() {
  'use strict';

  var app = angular.module('noxan', []);

  app.config(['$interpolateProvider', function($interpolateProvider) {
    return $interpolateProvider.startSymbol('{$').endSymbol('$}');
  }]);

  app.controller('ProjectCtrl', ['$scope', function($scope) {
    $scope.projects = [
      {name: 'devisio', url: 'http://www.devisio.net'}
    ];
  }]);
})();
(function() {
  'use strict';
  var lastItem;

  var nav = document.querySelector('nav');
  var navItems = nav.querySelectorAll('a');

  var scrollItems = Array.prototype.map.call(navItems, function(item) {
    return item.getAttribute('href');
  });

  var scrollHandler = function() {
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    scrollTop = scrollTop + 32 + 1; // offset

    var currentItem = scrollItems.map(function(item) {
      var ele = document.getElementById(item.replace('/#', ''));
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
  };

  window.addEventListener('DOMContentLoaded', function() {
    scrollHandler();
  });

  window.addEventListener('scroll', scrollHandler);
})();
