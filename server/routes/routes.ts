const expressServer = require("express");

const routes = expressServer.Router();

const database = require("../db/conn");

const ObjectId = require("mongodb").ObjectId;

routes.route("/bands").get(function (req, res) {
  let db_connect = database.getDb("favoriteBandsDatabase");
  db_connect
    .collection("favoriteBandsCollection")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

module.exports = routes;