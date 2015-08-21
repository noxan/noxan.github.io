// webpack
require("./index.html.jade");
require("./main.styl");

// start app
var angular = require("angular");
require("angular-ui-router");
require("angular-animate");
require("angular-scroll");
require("angular-background-image");
require("angular-google-analytics");

angular.module("noxan", [
  "ui.router", "ngAnimate", "duScroll", "backgroundImage",
  "angular-google-analytics",
  "noxan.portfolio",
  "noxan.labs"
]);

require("./portfolio");
require("./labs");
require("./blog");

require("./core/scroll.directive");

angular.module("noxan").config(["$stateProvider", "$urlRouterProvider", "$locationProvider", function ($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider.state("home", {
    url: "/",
    params: { scrollTo: "top" },
    template: require("./portfolio/index.tmpl.jade")
  }).state("home.work", {
    url: "^/work",
    params: { scrollTo: "work" }
  }).state("home.technology", {
    url: "^/technology",
    params: { scrollTo: "technology" }
  }).state("home.about", {
    url: "^/about",
    params: { scrollTo: "about" }
  }).state("home.contact", {
    url: "^/contact",
    params: { scrollTo: "contact" }
  }).state("demo", {
    url: "/demo",
    params: { scrollTo: "top" },
    template: require("./core/demo.tmpl.jade")
  }).state("labs", {
    url: "/labs",
    params: { scrollTo: "top" },
    controller: "LabsController",
    controllerAs: "labs",
    template: require("./labs/partials/list.jade")
  }).state("blog", {
    url: "/blog",
    params: { scrollTo: "top" },
    template: require("./blog/partials/list.jade")
  });

  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise("/");
}]);
