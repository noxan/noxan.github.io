function Technologies() {
  return {
    all: function () {
      return require("./technologies.data.json");
    }
  };
}
Technologies.$inject = [];

angular.module("noxan.portfolio.technologies").service("Technologies", Technologies);
