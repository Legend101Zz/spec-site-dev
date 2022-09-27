import { rubleSign } from "fontawesome";
import React from "react";

const AboutCard = (props) => {
  return (
    <div className="flex flex-col border text-left rounded-2xl py-12 px-8 hover:scale-105 duration-300  box-shadow: 120px 80px 40px 20px #0ff ">
      
      <div>
        <div className="bg-[#00d8ff] inline-flex p-2 rounded-full">
          {props.icon}
        </div>
        <h3 className="text-xl font-bold py-4">{props.heading}</h3>
        <p className="text-gray-300">{props.text}</p>
      </div>
    </div>
  );
};

export default AboutCard;
