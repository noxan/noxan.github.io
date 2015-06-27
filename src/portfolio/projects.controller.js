function ProjectsController(Projects, ngDialog) {
  var vm = this;

  vm.projects = Projects.all();

  vm.showDetails = function (project) {
    ngDialog.open({
      template: require("./projects.detail.tmpl.jade")(),
      plain: true,
      className: "ngdialog-theme-noxan",
      controller: ["$scope", function ($scope) {
        $scope.project = project;
      }]
    });
  };
}
ProjectsController.$inject = ["Projects", "ngDialog"];

angular.module("noxan.portfolio.projects").controller("ProjectsController", ProjectsController);
