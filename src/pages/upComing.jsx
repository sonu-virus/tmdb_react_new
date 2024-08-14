import React, { useEffect, useState } from "react";
import apiClient from "../apiClient/apiClient";

const UpComingMovie = () => {
  const [upComMov, setUpComMov] = useState([]);
  const upComMovies = async () => {
    try {
      const res = await apiClient.getUpComing();
      console.log(res.data.results);
      setUpComMov(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    upComMovies();
  }, []);

  return (
    <div className="min-h-screen flex">
      <div className="min-h-full w-48 bg-gray-500">
        <h2>Now Playing Movies</h2>
        <div>ilh</div>
      </div>
      <div className="flex justify-center items-center w-full">
        {upComMov && upComMov.length > 0 ? (
          <div className="grid grid-cols-5 gap-2 p-2">
            {upComMov.map((data, i) => (
              <div className="h-[430px] shadow-md shadow-gray-600/20 rounded-md">
                <div className="h-[300px] w-full" key={data.id || i}>
                  <img
                    className="rounded-t-md w-full h-full"
                    src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
                    alt={data.original_title}
                  />
                </div>
                <div className="  p-4 rounded-b-md">
                  <div className="font-bold flex-wrap">
                    {data.original_title}
                  </div>
                  <div>{data.release_date}</div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>No upComMoving movies available</div>
        )}
      </div>
    </div>
  );
};

export default UpComingMovie;