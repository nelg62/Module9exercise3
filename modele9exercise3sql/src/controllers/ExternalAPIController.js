"use strict";

const Models = require("../models");
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

const GetSingleExternalPokemon = (req, res) => {
  const { name } = req.params.name;
  externalApiService
    .getExternalDataByName(name)
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const createUserExternal = (req, res) => {
  const { name } = req.params.name;
  externalApiService
    .getExternalDataByName(name)
    .then(
      Models.User.create({
        username: req.params.name,
        email: `${req.params.name}@gmail.com`,
        password: `${req.params.name}123!`,
      })
    )
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
  createUserExternal,
  GetSingleExternalPokemon,
};
