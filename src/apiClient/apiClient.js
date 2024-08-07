import axios from "axios";

// const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
const token = process.env.token;
const apiClient = axios.create({
  baseURL: BASE_URL,
  // params: {
  //   api_key: API_KEY,
  // },
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
});

const getNowPlaying = () => {
  return apiClient.get("/movie/now_playing");
};
const getMoviePoster = () => {
  return apiClient.get("/discover/movie");
};

export default {
  getNowPlaying,
  getMoviePoster,
};
