import axios from "axios";

// const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
const token = process.env.REACT_APP_TOKEN;
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
const getPopMov = () => {
  return apiClient.get("/movie/popular");
};
const getTopRated = () => {
  return apiClient.get("/movie/top_rated");
};
const getUpComing = () => {
  return apiClient.get("movie/upcoming");
};
const getMoviesDetails = (id) => {
  return apiClient.get(`movie/${id}`);
};
const getMoveiDetail = (movie_id) => {
  return apiClient.get(`movie/${movie_id}/credits`);
};

export default {
  getNowPlaying,
  getMoviePoster,
  getPopMov,
  getTopRated,
  getUpComing,
  getMoviesDetails,
  getMoveiDetail,
};
