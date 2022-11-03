import axios from "axios";

const API = "https://restcountries.com/v2/all";
const API_COUNTRY = "https://restcountries.com/v2/name/";
const API_ALPHA = "https://restcountries.com/v2/alpha/";

export default {
  get() {
    return axios.get(API);
  },
  getCountry(name) {
    return axios.get(API_COUNTRY + name);
  },
  getCountryAlpha(alpha) {
    return axios.get(API_ALPHA + alpha);
  },
};
