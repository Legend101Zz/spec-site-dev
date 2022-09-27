import React from "react";

import herovid from "../../assets/2112.w026.n002.1265B.p1.1265.jpg";
export default function Hero() {
  return (
    <div name="home" className="w-full h-[90vh] top-[90px]">
      <img
        className="object-cover h-full w-full absolute -z-10"
        src={herovid}
        autoPlay
        loop
        muted
      />

      <div className="w-full h-[90%] flex flex-col justify-center items-center text-white px-4 text-center">
        <h1 className="text-[50px]">Electrothon</h1>
        <h1 className="py-2">
          <span className="blue">5.0</span>
        </h1>
        <p className="text-xl py-4">
          MoonShot your creativity and engage yourself in a worldwide hackathon.
        </p>
        <div>
          <button className="m-2">SEARCH | PLAN | ENGAGE | CREATE </button>
        </div>
      </div>
      <div>
        <p className="text-center text-white text-2xl font-bold">
          Total participants: 5000 and counting...
        </p>
      </div>
    </div>
  );
}
