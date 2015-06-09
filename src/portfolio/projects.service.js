function Projects() {
  return {
    all: function () {
      return require("./projects.data.json");
    }
  };
}
Projects.$inject = [];

angular.module("noxan.portfolio.projects").service("Projects", Projects);
