import React, { useEffect, useState } from "react";
import apiClient from "../apiClient/apiClient";

const NowPlaying = () => {
  const [nowPlay, setNowPlay] = useState([]);
  const nowPlaying = async () => {
    try {
      const res = await apiClient.getNowPlaying();
      console.log(res.data.results);
      setNowPlay(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    nowPlaying();
  }, []);

  return (
    <div>
      <div>Popular</div>
      <div>
        {nowPlay && nowPlay.length > 0 ? (
          nowPlay.map((data, i) => (
            <div key={data.id || i}>
              <img
                height={200}
                width={300}
                src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
                alt={data.original_title}
              />

              <div>{data.poster_path}</div>
            </div>
          ))
        ) : (
          <div>No popular movies available</div>
        )}
      </div>
    </div>
  );
};

export default NowPlaying;
