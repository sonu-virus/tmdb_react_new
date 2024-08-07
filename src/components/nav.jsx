import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div className="h-16 w-full justify-between px-4 flex whitespace-nowrap items-center bg-[#032541] text-white">
        <div className="flex gap-10 justify-center items-center ">
          <img src="tmdb.svg" alt="hj" height={100} width={170} />
          <div className="relative group">
            <p className="cursor-pointer">Movies</p>
            <div className="absolute rounded-md z-10 outline outline-1  w-28 justify-center items-center top-6 hidden group-hover:block">
              <div className="flex flex-col  rounded-md ">
                <Link to={"/popular"}>
                  <p className="hover:bg-gray-300 rounded-t-md px-4 w-full">
                    Popular
                  </p>
                </Link>
                <Link to={"/nowPlaying"}>
                  <p className="hover:bg-gray-300 px-4 w-full">NowPlaying</p>
                </Link>
                <Link to={"/upComing"}>
                  <p className="hover:bg-gray-300 px-4 w-full">UpComing</p>
                </Link>
                <Link to={"/topRated"}>
                  <p className="hover:bg-gray-300 px-4 w-full">TopRated</p>
                </Link>
              </div>
            </div>
          </div>

          <p>Tv Shows</p>
          <p>People</p>
          <p>More</p>
        </div>
        <div
          className="flex
        gap-10"
        >
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </p>
          <p>En</p>
          <p>Login</p>
          <p>Join TMDB</p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Nav;
