require("./projects.module");
require("./technology");
require("./about");
require("./contact");

angular.module("noxan.portfolio", [
  "noxan.portfolio.projects",
  "noxan.portfolio.technology",
  "noxan.portfolio.about",
  "noxan.portfolio.contact"
]);
