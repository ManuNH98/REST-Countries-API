import axios from "axios";

const API = "https://restcountries.com/v2/all";
const API_COUNTRY = "https://restcountries.com/v2/name/";
const API_REGION = "https://restcountries.com/v2/region/";

export default {
  get() {
    return axios.get(API);
  },
  getCountry(name) {
    return axios.get(API_COUNTRY + name);
  },
  getByCountry(name) {
    return axios.get(API_COUNTRY + name);
  },
  getByRegion(region) {
    return axios.get(API_REGION + region);
  },
};
