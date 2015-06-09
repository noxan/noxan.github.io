angular.module("noxan.labs", []);

angular.module("noxan.labs").controller("LabsController", [function () {
  var ctrl = this;

  ctrl.experiments = require("./labs.data.json").experiments;
  ctrl.projects = require("./labs.data.json").projects;
}]);
