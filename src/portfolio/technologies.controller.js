function TechnologiesController(Technologies) {
  var vm = this;

  vm.technologies = Technologies.all();
}
TechnologiesController.$inject = ["Technologies"];

angular.module("noxan.portfolio.technologies").controller("TechnologiesController", TechnologiesController);
