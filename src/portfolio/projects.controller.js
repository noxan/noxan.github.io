function ProjectsController(Projects) {
  var vm = this;

  vm.projects = Projects.all();

  vm.showDetails = function (project) {
  };
}
ProjectsController.$inject = ["Projects"];

angular.module("noxan.portfolio.projects").controller("ProjectsController", ProjectsController);
