var scrollHandler = function (state, $document) {
  if (state.params && state.params.hasOwnProperty("scrollTo")) {
    var id = state.params.scrollTo;
    var element = document.getElementById(id);
    if (element) {
      $document.scrollToElementAnimated(angular.element(element));
    }
  }
};

angular.module("noxan").directive("scrollManager", ["$rootScope", "$state", "$document", function ($rootScope, $state, $document) {
  return {
    link: function($scope, $element, $attrs) {
      scrollHandler($state.current, $document);

      removeListener = $rootScope.$on("$stateChangeSuccess", function (event) {
        scrollHandler($state.current, $document);
      });

      $scope.$on('$destroy', removeListener);
    }
  };
}]);
