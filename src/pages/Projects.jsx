import React from "react";
import Slider from "@/components/Swiper";

const Projects = () => {
  return (
    <section className="flex flex-col justify-center items-center max-w-[100%] lg:w-[65%] 2xl:w-[75%] h-auto gap-[30px] select-none mt-10">
      <div className="text-white w-full py-18 px-8 bg-[#0f0f0f85] rounded-xl border border-[#00ff5e66] backdrop-blur-md">
        <h1 className="merienda text-3xl text-[#00ff5e] mb-5 w-[max-content]">
          Portfolio
        </h1>
        <p className="poppins text-md text-gray-300 leading-relaxed text-start mt-[40px]">
          I specialize in building dynamic, responsive, and visually engaging
          websites. My focus is on front-end development using{" "}
          <span className="text-[#00ff5e] font-medium">HTML</span>,{" "}
          <span className="text-[#00ff5e] font-medium">CSS</span>, and{" "}
          <span className="text-[#00ff5e] font-medium">JavaScript</span>, along
          with <span className="text-[#00ff5e] font-medium">WordPress</span> for
          creating custom layouts, themes, and user-friendly interfaces.
          <br />
          <br />
          I’m currently learning{" "}
          <span className="text-[#00ff5e] font-medium">React.js</span> and
          building up real-world experience with it. Once I feel confident, I
          plan to transition into{" "}
          <span className="text-[#00ff5e] font-medium">Next.js</span> to expand
          my capabilities in full-stack and server-side rendering.
          <br />
          <br />
          I’m also exploring{" "}
          <span className="text-[#00ff5e] font-medium">
            Discord bot development
          </span>{" "}
          using <span className="text-[#00ff5e] font-medium">Discord.js</span>{" "}
          out of curiosity and personal interest, aiming to build fun and
          interactive tools for online communities down the line.
          <br />
          <br />
          Below, you'll find a collection of projects that showcase my growth,
          creativity, and passion for front-end web development.
        </p>
      </div>

      <div className="text-white w-full py-18 px-8 bg-[#0f0f0f85] rounded-xl border border-[#00ff5e66] backdrop-blur-md">
        <h1 className="merienda text-3xl text-[#00ff5e] mb-5">
          My Projects!
        </h1>
        {/* Projects Slider */}
        <div className="w-full max-w-full mx-auto overflow-hidden mt-[40px]">
          <Slider />
        </div>
      </div>
    </section >
  );
};

export default Projects;
