import React from "react";
import { SiHiveBlockchain, SiStrapi, SiFsecure } from "react-icons/si";
import { VscServerProcess } from "react-icons/vsc";
import AboutCard from "./aboutCard";

export default function About() {
  return (
    <div name="about" className="w-full bg-black text-white text-center">
      <div className="max-w-[1240px] mx-auto px-4 py-16 ">
        <div>
          <h1 className="py-4">About Us</h1>
          <p className="text-white mb-10">
            Electrothon is a student-run hackathon, under the aegis of the
            National Institute of Technology Hamirpur, India. An exceptional
            place for young and dedicated minds, a platform for organizations to
            meet a wide range of talented, and with over 1700+ registrations,
            Electrothon serves as a hub of ingenious ideas, innovation,
            entrepreneurship and technical skills.
          </p>
          {/* Card Container */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
            {/* Card */}
            <AboutCard
              icon={<SiHiveBlockchain size={40} />}
              heading="Climate Change"
              text="Lead a brawl against climate change by fabricating an innovative solution to forge a world where the future generations don't have to worry."
            />

            <AboutCard
              icon={<SiFsecure size={40} />}
              heading="Natural Disasters"
              text="Harnessing the power of technology, vouch for innovative solutions to address the uprising challenges caused by natural calamities."
            />
            <AboutCard
              icon={<SiStrapi size={40} />}
              heading="Hunger Eradication"
              text="In order to shape a world where no one has to question the guarantee of a two square meal, devise projects that promise to eradicate hunger."
            />
            <AboutCard
              icon={<VscServerProcess size={40} />}
              heading="Open Innovation"
              text="Let your imagination go haywire as you envision ideas that hold the capability to solve any problem that has been distressing mankind for ages."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
