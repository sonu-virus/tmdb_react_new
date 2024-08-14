import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#032541] relative text-white py-20">
        <div className="container mx-auto  px-4">
          <div className=" flex justify-center gap-10">
            <div className="h-32 w-32">
              <img className="h-full w-full" src="1.svg" alt="TMDB" />
            </div>
            <div>
              <h3 className="font-bold">THE BASICS</h3>
              <p>About TMDB</p>
              <p>Contect Us</p>
              <p>Support Forums</p>
              <p>API</p>
              <p>System Status</p>
            </div>
            <div>
              <h3 className="font-bold">GET INVOLVED</h3>
              <p>Contribution Bible</p>
              <p>Add New Movie</p>
              <p>Add New Tv Show</p>
            </div>
            <div>
              <h3 className="font-bold">CUMMUNOITY</h3>
              <p>guidelines </p>
              <p>Discussions</p>
              <p>Leaderboard</p>
            </div>
            <div>
              <h3 className="font-bold">LEGAL</h3>
              <p>Terms Of Use </p>
              <p>API Terms Of Use </p>
              <p>Privecy Policy</p>
              <p>DMCA Policy</p>
            </div>
          </div>
          <div className="text-[#3884c2de]   flex justify-center">
            <p className="z-10 absolute bottom-1">INFLECTION ORG Pvt Ltd</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
