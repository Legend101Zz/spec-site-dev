import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "../../assets/spec_logo.webp";
import {
  faDiscord,
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div
      name="Contact Us"
      className="w-full px-4 py-16 bg-black text-white text-center"
    >
      <h1>Register Now</h1>
      <div className="py-4">
        <input
          className="p-3 rounded-3xl mr-4"
          type="email"
          placeholder="Enter your email"
        />
        <button>Sign Up</button>
      </div>
      <div className="flex items-center justify-center py-2 ">
        <input className="mr-2 " type="checkbox" />
        <p>Yes, I agree to receive email updates from SPEC.</p>
      </div>
      <div className="md:flex justify-center gap-5 lg:gap-40 mt-5 font-sans">
        <div className=" md:visible flex justify-center mb-2">
          <a
            href="https://specnith.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm md:text-lg md:font-bold text-white hover:text-gray-300 "
          >
            <picture>
              <source srcSet={logo} type="image/webp" />
              <img className="w-8 md:w-16" src={logo} alt="spec_logo" />
            </picture>
          </a>
        </div>
        <div className=" flex justify-center mb-4">
          <ul>
            <li className=" text-white font-medium text-sm md:text-lg flex justify-center md:justify-start pb-2">
              RESOURCES
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1P_-npMEWQtOUAWnuJH66aK5h7sCxSgRy/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center md:justify-start text-sm md:md:text-sm text-gray-400 pb-2 hover:text-gray-300"
              >
                Sponsorship Brochure
              </a>
            </li>
            <li>
              <a
                href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center md:justify-start text-sm md:md:text-sm text-gray-400 pb-2 hover:text-gray-300"
              >
                Code of Conduct
              </a>{" "}
            </li>
          </ul>
        </div>
        <div className="text-white flex text-sm md:text-lg justify-center mb-4 ">
          <ul>
            <li className="text-white font-medium flex justify-center md:justify-start pb-2 ">
              ADDRESS
            </li>
            <li className=" md:text-sm flex justify-center md:justify-start pb-2 text-gray-400 hover:text-gray-300">
              <a
                href="https://www.google.com/maps/place/NIT+Hamirpur/@31.6750134,76.5271587,13z/data=!4m8!1m2!2m1!1sNIT+Hamirpur,+Himachal+Pradesh,+India!3m4!1s0x3904d5487e12c4a1:0x395f92d3a202a7d0!8m2!3d31.708371!4d76.527356"
                target="_blank"
                rel="noopener noreferrer"
              >
                NIT Hamirpur
              </a>
            </li>
            <li className=" md:text-sm flex justify-center md:justify-start pb-2 text-gray-400">
              Hamirpur, Himachal Pradesh, India
            </li>
            <li className=" md:text-sm flex justify-center md:justify-start text-gray-400">
              177005
            </li>
          </ul>
        </div>
        <div className="">
          <div className="flex justify-center md:justify-start text-sm md:text-lg font-medium  text-white pb-2">
            STAY CONNECTED
          </div>

          <div className="justify-center flex space-x-2 md:space-x-5 mt-1 md:mt-1 opacity-80 mb-10">
            <a
              href="https://discord.gg/cjMMRs7tHs"
              rel="noreferrer noopenor"
              target="_blank"
            >
              <FontAwesomeIcon
                className="text-1xl md:text-2xl text-blue-800 fill-current"
                icon={faDiscord}
              />
            </a>
            <a
              href="https://www.facebook.com/spec.ece/"
              rel="noreferrer noopenor"
              target="_blank"
            >
              <FontAwesomeIcon
                className="text-1xl md:text-2xl text-blue-600 fill-current"
                icon={faFacebook}
              />
            </a>
            <a
              href="https://twitter.com/SPEC__NITH"
              rel="noreferrer noopenor"
              target="_blank"
            >
              <FontAwesomeIcon
                className="text-1xl md:text-2xl text-blue-300 fill-current"
                icon={faTwitter}
              />
            </a>
            <a
              href="https://instagram.com/s.p.e.c_nith?utm_source=ig_profile_share&amp;igshid=1dd01jvv7xk83"
              rel="noreferrer noopenor"
              target="_blank"
            >
              <FontAwesomeIcon
                className="text-1xl md:text-2xl text-pink-600 fill-current"
                icon={faInstagram}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/s-p-e-c-nith-40214b197/"
              rel="noreferrer noopenor"
              target="_blank"
            >
              <FontAwesomeIcon
                className="text-1xl md:text-2xl text-blue-500 fill-current"
                icon={faLinkedin}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="text-sm flex justify-center pb-2 text-gray-400">
        © 2022, SPEC NITH
      </div>
    </div>
  );
}
