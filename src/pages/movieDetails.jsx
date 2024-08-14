import React, { useEffect, useState } from "react";
import apiClient from "../apiClient/apiClient";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/moviedetail";

const MovieDetails = () => {
  const { id } = useParams();
  const [movDetail, setMovDetail] = useState(null); // Initialize as null for better conditional rendering
  const [error, setError] = useState(null); // State for error handling

  const fetchMovieDetail = async (id) => {
    try {
      const res = await apiClient.getMoviesDetails(id);
      setMovDetail(res.data);
    } catch (error) {
      console.error(error);
      setError("Failed to load movie details");
    }
  };
  const hours = Math.floor(movDetail?.runtime / 60);
  const minutes = movDetail?.runtime - hours * 60;

  const date = new Date(movDetail?.release_date);

  const year = date.getFullYear();

  useEffect(() => {
    if (id) {
      fetchMovieDetail(id);
    }
  }, [id]);

  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        {error}
      </div>
    );
  }

  if (!movDetail) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div
        className="bg-cover bg-center h-[600px] "
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movDetail.backdrop_path})`,
        }}
      >
        <div className="w-full h-full flex gap-10 p-12 bg-black/70 ;">
          <div className="rounded-md h-[470px] w-[400px] ">
            <img
              className="w-full h-full object-cover rounded-t-md "
              src={`https://image.tmdb.org/t/p/w500/${movDetail.poster_path}`}
              alt={movDetail.title}
            />
            <div className="bg-[#032541] rounded-b-md h-12"></div>
          </div>
          <div className="bg-transparent h-full w-full">
            <div className="text-white p-12">
              <p className="font-bold text-4xl">
                {movDetail?.original_title}({year})
              </p>
              <div className="flex gap-1">
                {movDetail?.genres?.map((data, i) => (
                  <p key={i}>{data.name}</p>
                ))}
                <ul>
                  <li>
                    {hours}h{minutes}m
                  </li>
                </ul>
              </div>
              <div>{movDetail?.overview}</div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div>
        <MovieDetail id={id} />
      </div>
    </div>
  );
};

export default MovieDetails;
