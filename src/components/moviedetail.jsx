import React, { useEffect, useState } from "react";
import apiClient from "../apiClient/apiClient";

const MovieDetail = (props) => {
  const [cast, setCast] = useState([]);
  const movDetail = async (id) => {
    try {
      const res = await apiClient.getMoveiDetail(id);
      console.log(res.data.cast);
      setCast(res.data.cast);
    } catch (error) {
      console.error("Failed to fetch movie details:", error);
    }
  };

  useEffect(() => {
    if (props.id) {
      movDetail(props.id);
    }
  }, [props.id]);

  return (
    <div>
      <div className="w-full overflow-x-scroll">
        <div className="flex space-x-4">
          {cast?.map((data, i) => (
            <div className="m-4  shadow-md shadow-gray-500 h-[300px] rounded-b-md">
              <div key={i} className="flex-shrink-0   w-[150px] h-[225px] ">
                {data.profile_path ? (
                  <img
                    className="object-contain rounded-t-md w-full h-full"
                    src={`https://image.tmdb.org/t/p/w500/${data?.profile_path}`}
                    alt={`Cast ${data.cast_id}`}
                  />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-full w-full"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                )}
              </div>
              <div className="flex-nowrap justify-center flex flex-col  p-1">
                <b>{data.name}</b>
                <p>{data.character}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
