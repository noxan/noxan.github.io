function Projects() {
  var projects = require("./projects.data.json");

  projects.forEach(function (project) {
    if (!project.hasOwnProperty("image")) {
      project.image = "//placehold.it/400?text=" + project.name;
    }
  });

  return {
    all: function () {
      return projects;
    }
  };
}
Projects.$inject = [];

angular.module("noxan.portfolio.projects").service("Projects", Projects);
