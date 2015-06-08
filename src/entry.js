require("./index.html.jade");

var css = require("./main.styl");

var angular = require("angular");
var router = require("angular-ui-router");

angular.module("noxan", ["ui.router"]);

angular.module("noxan").config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
  $stateProvider.state("home", {
    url: "/",
    template: require("./partials/home.jade")
  });

  $urlRouterProvider.otherwise("/");
}]);
