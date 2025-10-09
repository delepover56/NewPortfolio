import React from "react";

const About = () => {
  return (
    <section className="flex flex-col justify-center items-center max-w-[100%] lg:w-[65%] 2xl:w-[75%] h-auto gap-[30px] select-none mt-10">
      <div className="text-white w-full py-18 px-8 bg-[#0f0f0f85] rounded-xl border border-[#00ff5e66] backdrop-blur-md">
        <h1 className="merienda text-3xl lg:text-4xl text-[#00ff5e] mb-5 w-[max-content]">
          Get To Know Me!
        </h1>
        <p className="poppins text-md text-gray-300 leading-relaxed text-start mt-[40px]">
          Hey there! I'm{" "}
          <span className="text-[#00ff5e] font-medium">M. Taha Khan</span> – a
          passionate front-end web developer from the bustling city of Karachi!
          With a knack for crafting interactive and engaging web experiences, I
          bring your ideas to life using clean HTML, sleek CSS, and dynamic
          JavaScript.
          <br />
          <br />
          I’ve also got hands-on experience with{" "}
          <span className="text-[#00ff5e] font-medium">WordPress</span> and{" "}
          <span className="text-[#00ff5e] font-medium">PHP</span>, building
          powerful websites that are both user-friendly and visually striking.
          Right now, I’m diving deep into{" "}
          <span className="text-[#00ff5e] font-medium">React.js</span>,
          sharpening my skills in modern JavaScript frameworks, with{" "}
          <span className="text-[#00ff5e] font-medium">Next.js</span> on my
          radar next.
          <br />
          <br />
          I’ve recently begun exploring{" "}
          <span className="text-[#00ff5e] font-medium">
            Discord bot development
          </span>{" "}
          using <span className="text-[#00ff5e] font-medium">Discord.js</span>,
          expanding my capabilities in building interactive tools for online
          communities.
          <br />
          <br />
          Whether it’s a custom-coded solution, a slick WordPress site, or even
          a Discord bot, I’m your friendly neighborhood developer, ready to make
          your vision a reality.{" "}
          <span className="text-[#00ff5e]">
            Let's build something awesome together!
          </span>
        </p>
      </div>

      <div className="text-white w-full py-18 px-8 bg-[#0f0f0f85] rounded-xl border border-[#00ff5e66] backdrop-blur-md">
        <h1 className="merienda text-2xl lg:text-4xl text-[#00ff5e] mb-5 afterLine2 w-[max-content]">
          What I Do!
        </h1>
        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-8 mt-[50px] max-w-full mx-auto 2xl:mx-0 2xl:justify-start [@media(min-width:1600px)]:flex-nowrap [@media(min-width:1600px)]:justify-between">
          {/* Web Development */}
          <div
            className="flex flex-col justify-start items-center gap-3 px-5 py-9 sm:w-[300px] w-full border border-[#00ff5e66] rounded-2xl bg-[#0f0f0fb7] hover:bg-[#00ff5e10] hover:shadow-[3px_3px_6px_#00ff5e] transition-all duration-300"
            id="webDevCard"
          >
            <div className="flex justify-center items-center bg-[#053a00ff] p-3 webDev rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="30"
                height="30"
                fill="#00ff5e"
              >
                <path d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z"></path>
              </svg>
            </div>
            <h6 className="roboto-slab text-[20px] text-center text-[#00ff5e]">
              Web Development
            </h6>
            <p className="poppins text-sm text-gray-300 text-center">
              Crafting sleek, responsive websites with modern tools and clean
              code.
            </p>
          </div>
          {/* Managing Discord Servers */}
          <div
            className="flex flex-col justify-start items-center gap-3 px-5 py-9 sm:w-[300px] w-full border border-[#00ff5e66] rounded-2xl bg-[#0f0f0fb7] hover:bg-[#00ff5e10] hover:shadow-[3px_3px_6px_#00ff5e] transition-all duration-300"
            id="manageDiscordCard"
          >
            <div className="flex justify-center items-center bg-[#053a00ff] p-3 manageDiscord">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="30"
                height="30"
                fill="#00ff5e"
              >
                <path d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"></path>
              </svg>
            </div>
            <h6 className="roboto-slab text-[20px] text-center text-[#00ff5e]">
              Discord Bot Development
            </h6>
            <p className="poppins text-sm text-gray-300 text-center ">
              Creating custom Discord bots with Discord.js to automate tasks and
              boost server activity.
            </p>
          </div>
          {/* Image Editing */}
          <div
            className="flex flex-col justify-start items-center gap-3 px-5 py-9 sm:w-[300px] w-full border border-[#00ff5e66] rounded-2xl bg-[#0f0f0fb7] hover:bg-[#00ff5e10] hover:shadow-[3px_3px_6px_#00ff5e] transition-all duration-300"
            id="imageEditingCard"
          >
            <div className="flex justify-center items-center bg-[#053a00ff] p-3 imageEditing">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="30"
                height="30"
                fill="#00ff5e"
              >
                <path d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM5 19V5h14l.002 14H5z"></path>
                <path d="m10 14-1-1-3 4h12l-5-7z"></path>
              </svg>
            </div>
            <h6 className="roboto-slab text-[20px] text-center text-[#00ff5e]">
              Image Editing
            </h6>
            <p className="poppins text-sm text-gray-300 text-center ">
              While image editing isn't my primary focus, I occasionally dive
              into it when needed.
            </p>
          </div>
          {/* Video Games */}
          <div
            className="flex flex-col justify-start items-center gap-3 px-5 py-9 sm:w-[300px] w-full border border-[#00ff5e66] rounded-2xl bg-[#0f0f0fb7] hover:bg-[#00ff5e10] hover:shadow-[3px_3px_6px_#00ff5e] transition-all duration-300"
            id="videoGamesCard"
          >
            <div className="flex justify-center items-center bg-[#053a00ff] p-3 videoGames">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                width="30"
                height="30"
                fill="#00ff5e"
              >
                <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1z"></path>
                <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729q.211.136.373.297c.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466s.34 1.78.364 2.606c.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527s-2.496.723-3.224 1.527c-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.3 2.3 0 0 1 .433-.335l-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a14 14 0 0 0-.748 2.295 12.4 12.4 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.4 12.4 0 0 0-.339-2.406 14 14 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27s-2.063.091-2.913.27"></path>
              </svg>

            </div>
            <h6 className="roboto-slab text-[20px] text-center text-[#00ff5e]">
              Video Games
            </h6>
            <p className="poppins text-sm text-gray-300 text-center ">
              I love playing video games. it's fun and a great way to unwind,
              and relax myself.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
