import axios from "axios";

const instance = axios.create({
  baseURL: "https://restcountries.com",
});

const Api = {
  getAllCountries: async () => {
    try {
      const { data } = await instance.get("/v3.1/all");
      return data;
    } catch (e) {
      console.log("[API-ERROR]: Cannot fetch from the getAllCountries method.");
    }
    return [];
  },
  getCountriesByName: async (name) => {
    try {
      const { data } = await instance.get(`/v3.1/name/${name}`);
      return data;
    } catch (e) {
      console.log(
        "[API-ERROR]: Cannot fetch from the getCountriesByName method."
      );
    }
    return [];
  },
  getCountryByName: async (name) => {
    try {
      const { data } = await instance.get(`/v3.1/name/${name}?fullText=true`);
      return data[0];
    } catch (e) {
      console.log(
        "[API-ERROR]: Cannot fetch from the getCountryByName method."
      );
    }
    return [];
  },
  getCountriesByRegion: async (region) => {
    try {
      const { data } = await instance.get(`/v3.1/region/${region}`);
      return data;
    } catch (e) {
      console.log(
        "[API-ERROR]: Cannot fetch from the getCountriesByRegion method."
      );
    }
    return [];
  },
};

export default Api;
