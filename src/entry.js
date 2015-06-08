require("./index.html.jade");

var css = require("./main.styl");

var angular = require("angular");
var router = require("angular-ui-router");

angular.module("noxan", ["ui.router"]);

angular.module("noxan").config(["$stateProvider", "$urlRouterProvider", "$locationProvider", function ($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider.state("demo", {
    url: "/demo",
    template: require("./partials/demo.jade")
  });

  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise("/");
}]);
