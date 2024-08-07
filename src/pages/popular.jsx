import React, { useEffect, useState } from "react";
import apiClient from "../apiClient/apiClient";

const Popular = () => {
  //   const [popMov, setPopMov] = useState([]);
  //   const NowPlaying = async () => {
  //     try {
  //       const res = await apiClient.getNowPlaying();
  //       console.log(res.data.results);
  //       setPopMov(res.data.results);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   useEffect(() => {
  //     NowPlaying();
  //   }, []);

  return (
    <div>
      <div>Popular</div>
      {/* <div>
        {popMov && popMov.length > 0 ? (
          popMov.map((data, i) => (
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
      </div> */}
    </div>
  );
};

export default Popular;
