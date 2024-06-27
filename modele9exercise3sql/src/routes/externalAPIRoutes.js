const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get("/", (req, res) => {
  Controllers.externalAPIController.getExternalData(req, res);
});

module.exports = router;
