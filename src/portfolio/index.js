require("./projects.module");
require("./technologies.module");
require("./about.module");
require("./contact.module");

angular.module("noxan.portfolio", [
  "noxan.portfolio.projects",
  "noxan.portfolio.technologies",
  "noxan.portfolio.about",
  "noxan.portfolio.contact"
]);
