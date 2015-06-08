var angular = require("angular");
var router = require("angular-ui-router");

angular.module("noxan", ["ui.router"]);

angular.module("noxan").config(["$stateProvider", "$urlRouterProvider", "$locationProvider", function ($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider.state("home", {
    url: "/",
    template: require("./partials/home.jade")
  }).state("demo", {
    url: "/demo",
    template: require("./partials/demo.jade")
  });

  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise("/");
}]);
