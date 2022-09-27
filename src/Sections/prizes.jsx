import React from "react";
import Single from "../assets/runnerup.png";
import Double from "../assets/winner.png";
import Triple from "../assets/3rd.png";

export default function Prizes() {
  return (
    <div name="prizes" className="w-full bg-black text-white text-center ">
      {" "}
      <h1 className="mb-12 ">Prizes</h1>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className=" flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300 hover:border-2">
          <img
            className="w-30 mx-auto mt-[-3rem] bg-[#fff90]"
            src={Single}
            alt="/"
          />
          <h2 className="w-full shadow-xl text-2xl font-bold text-center py-8 bg-gray-90 ">
            Runners Up
          </h2>
          <p className="text-center text-4xl font-bold"> &#8377;15,000</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Rs.800 Coupon From GFG</p>
            <p className="py-2 border-b mx-8">Lifetime upgrade of Taskade</p>
            <p className="py-2 border-b mx-8">Jio Recharge 100GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            View More
          </button>
        </div>
        <div className="w-full shadow-xl bg-gray-90 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-30 mx-auto mt-[-3rem] bg-transparent"
            src={Double}
            alt="/"
          />
          <h2 className="text-xl font-bold text-center py-8">Winner </h2>
          <p className="text-center text-4xl font-bold">&#8377;20,000</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Rs.1200 Coupon From GFG </p>
            <p className="py-2 border-b mx-8">Lifetime upgrade of Taskade</p>
            <p className="py-2 border-b mx-8">Jio Recharge 150GB</p>
          </div>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            View More
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 hover:border-2">
          <img
            className="w-30 mx-auto mt-[-3rem] bg-[#fff90]"
            src={Triple}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">2nd Runner Up</h2>
          <p className="text-center text-4xl font-bold">&#8377;10,000</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Rs.800 Coupon From GFG</p>
            <p className="py-2 border-b mx-8">Lifetime upgrade of Taskade</p>
            <p className="py-2 border-b mx-8">Jio Recharge 50GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            View More
          </button>
        </div>
      </div>
    </div>
  );
}
