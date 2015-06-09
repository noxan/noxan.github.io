var angular = require("angular");
require("angular-ui-router");
require("angular-animate");
require("angular-scroll");
require("angular-background-image");

require("./labs");

angular.module("noxan", [
  "ui.router", "ngAnimate", "duScroll", "backgroundImage",
  "noxan.portfolio",
  "noxan.labs"
]);

angular.module("noxan").config(["$stateProvider", "$urlRouterProvider", "$locationProvider", function ($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider.state("home", {
    url: "/",
    controller: "HomeController",
    controllerAs: "ctrl",
    params: {
      scrollTo: "top"
    },
    template: require("./partials/home.jade")
  }).state("home.work", {
    url: "^/work",
    params: {
      scrollTo: "work"
    },
    template: require("./partials/home.jade")
  }).state("home.technology", {
    url: "^/technology",
    params: {
      scrollTo: "technology"
    }
  }).state("home.about", {
    url: "^/about",
    params: {
      scrollTo: "about"
    }
  }).state("home.contact", {
    url: "^/contact",
    params: {
      scrollTo: "contact"
    }
  }).state("demo", {
    url: "/demo",
    template: require("./partials/demo.jade")
  }).state("labs", {
    url: "/labs",
    controller: "LabsController",
    controllerAs: "labs",
    template: require("./labs/partials/list.jade")
  }).state("blog", {
    url: "/blog",
    template: require("./blog/partials/list.jade")
  });

  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise("/");
}]);

require("./home-controller");
require("./scroll-directive");
require("./navigation");
require("./blog");
