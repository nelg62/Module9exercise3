"use strict";

const externalApiService = require("../service/externalApi");

const getExternalData = (req, res) => {
  const { offset, limit } = req.params;
  externalApiService
    .getExternalData(offset, limit)
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getExternalData,
};
