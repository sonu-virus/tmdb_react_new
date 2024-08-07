import React, { useEffect, useState } from "react";
import apiClient from "../apiClient/apiClient";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
//
//
const Home = () => {
  const [mPos, setMPos] = useState([]);
  const moviePoster = async () => {
    try {
      const { data } = await apiClient.getMoviePoster();
      console.log(data.results);
      setMPos(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    moviePoster();
  }, []);

  return (
    <div className="text-black">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <div>
          {mPos?.map((data, i) => (
            <SwiperSlide key={i}>
              <div
                className="bg-cover bg-center h-screen"
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/w500/${data.poster_path})`,
                }}
              >
                <div className="w-full h-full bg-gradient-to-r from-black/50 to-transparent">
                  <img
                    className="w-full h-full object-contain"
                    src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
                    alt={data.id}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Home;
