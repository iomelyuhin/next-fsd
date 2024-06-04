import axios from "axios";

const API_URL = process.env.STRAPI_API_URL || "http://localhost:1337";

export const fetchAPI = async (path: string, locale: string = "en") => {
  const requestUrl = `${API_URL}${path}?_locale=${locale}`;
  const response = await axios.get(requestUrl);
  console.log("response", response);

  return response.data;
};
