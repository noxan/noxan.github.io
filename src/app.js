var angular = require("angular");
require("angular-ui-router");
require("angular-animate");

angular.module("noxan", ["ui.router", "ngAnimate"]);

angular.module("noxan").config(["$stateProvider", "$urlRouterProvider", "$locationProvider", function ($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider.state("home", {
    url: "/",
    template: require("./partials/home.jade")
  }).state("demo", {
    url: "/demo",
    template: require("./partials/demo.jade")
  }).state("blog", {
    url: "/blog",
    template: require("./blog/partials/list.jade")
  });

  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise("/");
}]);

require("./navigation");
require("./blog");
