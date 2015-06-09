function TechnologiesController(Technologies) {
  var vm = this;

  vm.technologies = Technologies.all().map(function (tech, index) {
    tech.show = index < 10;
    return tech;
  });

  vm.hasHidden = function () {
    return vm.technologies.filter(function (tech) {
      return !tech.show;
    }).length > 0;
  };

  vm.showAll = function () {
    vm.technologies.forEach(function (tech) {
      tech.show = true;
    });
  };
}
TechnologiesController.$inject = ["Technologies"];

angular.module("noxan.portfolio.technologies").controller("TechnologiesController", TechnologiesController);
