const axios = require("axios");

const API_ALL = "https://restcountries.com/v3.1/all";
const API_COUNTRY = "https://restcountries.com/v3.1/name/{name}";
const API_REGION = "https://restcountries.com/v3.1/region/{region}";

export default {
  get() {
    return axios.get(API_ALL);
  },
};
