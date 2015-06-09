angular.module("noxan.labs", []);

angular.module("noxan.labs").controller("LabsController", [function () {
  var ctrl = this;

  ctrl.experiments = require("../data/labs.json").experiments;
  ctrl.projects = require("../data/labs.json").projects;
}]);
