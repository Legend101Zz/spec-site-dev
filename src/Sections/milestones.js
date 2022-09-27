import React from "react";

import terminal from "../assets/Screenshot 2022-09-26 at 02.31.03.png";

export default function Milestones() {
  return (
    <div className="w-full text-white bg-black">
      <div className="max-w-[1240px] mx-auto px-4 py-16 md:flex">
        <div>
          <h1>MoonShot Your Eureka.</h1>
          <p>
            Checkout <span className="blue">devfolio</span>, for{" "}
            <span className="blue">getting started</span> and start your journey
            into hackathons and let your imagination meet reality.
          </p>
        </div>
        <div className="flex justify-center w-full py-16">
          <img
            className="max-w-[250px] shadow-lg shadow-cyan-500/50"
            src={terminal}
            alt="/"
          />
        </div>
      </div>
    </div>
  );
}
