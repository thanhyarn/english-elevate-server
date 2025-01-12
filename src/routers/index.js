const vocabulary = require("./vocabularies");

function route(app) {
  app.use("/api/vocabulary", vocabulary);
}

module.exports = route;
