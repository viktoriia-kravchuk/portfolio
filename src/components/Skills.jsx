import React from "react";
import IconCard from "./IconCard";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import SQL from "../assets/sql.png";
import FireBase from "../assets/firebase.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";

const Skills = () => {
  return (
    <div name="skills" className="bg-[#0a192f] text-gray-300 w-full h-screen">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4">These are the technologies I have worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <IconCard icon={HTML} name="HTML" />
          <IconCard icon={CSS} name="CSS" />
          <IconCard icon={JavaScript} name="JAVASCRIPT" />
          <IconCard icon={ReactImg} name="REACT" />
          <IconCard icon={GitHub} name="GITHUB" />
          <IconCard icon={SQL} name="SQL" />
          <IconCard icon={FireBase} name="FIREBASE" />
          <IconCard icon={Tailwind} name="TAILWIND" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
