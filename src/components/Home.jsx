import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = (props) => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600 mb-4 font-mono text-4xl md:text-6xl">
          Hi, I&apos;m <br className="block md:hidden" />
        </p>
        <h1 className={!props.showNav ? "mb-2 font-mono font-bold text-4xl text-gray-100 md:text-6xl" : "hidden"}>
          <span className="relative ">
            <span className="h-20 pt-2 overflow-x-hidden whitespace-nowrap text-brand-accent">
              Viktoria <span className="text-3xl md:text-5xl">👋</span>
            </span>
            <span className="cursor absolute -bottom-0 left-0 -top-1 inline-block bg-[#0a192f] w-full animate-type will-change"></span>
          </span>
        </h1>

        <h2 className="text-4xl sm:text-7xl font-mono text-[#8892b0]">
          Front-end Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          {" "}
          I am a highly motivated graduate of university, want to utilize and
          improve my skills, gain experience in working environment. I am
          interested in front-end opportunities - especially ReactJS or
          JavaScript projects. However, if you have other request or question,
          don't hesitate to contact me using below form either.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            <Link to="work" smooth={true} duration={500}>
              View Work
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
