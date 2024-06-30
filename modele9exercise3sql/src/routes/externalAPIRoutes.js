const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get("/", (req, res) => {
  Controllers.externalAPIController.getExternalData(req, res);
});

router.get("/:name", (req, res) => {
  Controllers.externalAPIController.GetSingleExternalPokemon(req, res);
});

router.put("/:name", (req, res) => {
  Controllers.externalAPIController.createUserExternal(req, res);
});

module.exports = router;
