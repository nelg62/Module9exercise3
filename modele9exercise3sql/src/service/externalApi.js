const axios = require("axios");

const ExternalApiURL = "https://pokeapi.co/api/v2/pokemon";

const getExternalData = async (offset = 0, limit = 20) => {
  try {
    const response = await axios.get(
      `${ExternalApiURL}?offset=${offset}&limit=${limit}`
    );
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching data from external API ${error.message}`);
  }
};

module.exports = {
  getExternalData,
};
