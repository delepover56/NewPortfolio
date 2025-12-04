import React from "react";

const MyInfo = () => {
  return (
    <aside className="lg:sticky lg:top-[160px] w-full mx-[20px] sm:mx-0 lg:w-[35%] 2xl:w-[25%] h-[max-content] bg-[#0f0f0f80] backdrop-blur-md border-1 border-[#00ff5e40] flex flex-col justify-start items-center py-6 mt-10 rounded-2xl gap-5">
      {/* Profile Image */}

      <div className="flex rounded-2xl overflow-hidden w-[250px] h-auto">
        <img
          src="/Images/myAvatar.webp"
          alt="Taha"
          className="w-full pointer-events-none"
        />
      </div>

      {/* Profile Name */}

      <h1 className="text-[#00ff5e] merienda tracking-widest text-2xl">
        M. Taha Khan
      </h1>

      {/* Designation */}

      <p className="text-[#00ff5e] merienda tracking-widest text-sm uppercase bg-[#0f0f0f80] backdrop-blur-md border-1 border-[#00ff5e40] rounded-md py-2 px-4">
        Front-End Developer
      </p>

      {/* Social Links */}

      <div className="socialLinks flex gap-4 mt-2">
        {/* Instagram */}
        <a
          href="https://www.instagram.com/its.me_t.a.h.a/"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram flex justify-center items-center bg-gradient-to-br from-pink-800 via-pink-500 to-purple-400 w-[35px] h-[35px] rounded-md transition-all duration-[0.3s] hover:scale-[1.07] active:duration-[0.2s] shadow-[5px_5px_5px_0px_#000000FF]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="white"
          >
            <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
            <circle cx="16.806" cy="7.207" r="1.078"></circle>
            <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
          </svg>
        </a>
        {/* GitHub */}
        <a
          href="https://github.com/delepover56"
          target="_blank"
          rel="noopener noreferrer"
          className="github flex justify-center items-center bg-gradient-to-br from-slate-950 via-slate-800 to-slate-600 w-[35px] h-[35px] rounded-md transition-all duration-300 hover:scale-[1.07] active:duration-[0.2s] shadow-[5px_5px_5px_0px_#000000FF]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="white"
          >
            <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577v-2.168c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.204.084 1.837 1.236 1.837 1.236 1.07 1.832 2.809 1.302 3.495.995.108-.774.418-1.302.76-1.602-2.665-.305-5.467-1.333-5.467-5.932 0-1.31.468-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.007-.322 3.3 1.231a11.49 11.49 0 0 1 3.005-.404c1.02.005 2.046.138 3.005.404 2.29-1.553 3.295-1.231 3.295-1.231.656 1.653.244 2.873.12 3.176.77.84 1.232 1.91 1.232 3.22 0 4.609-2.807 5.624-5.479 5.92.43.372.814 1.1.814 2.216v3.285c0 .32.216.694.824.577C20.565 21.796 24 17.303 24 12 24 5.373 18.627 0 12 0z" />
          </svg>
        </a>
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/taha-khan03/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedIn flex justify-center items-center bg-gradient-to-br from-blue-900 via-blue-500 to-cyan-400 w-[35px] h-[35px] rounded-md transition-all duration-300 hover:scale-[1.07] active:duration-[0.2s] shadow-[5px_5px_5px_0px_#000000FF]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="white"
          >
            <circle cx="4.983" cy="5.009" r="2.188"></circle>
            <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
          </svg>
        </a>
        {/* Whatsapp */}
        <a
          href="https://wa.me/923372353901"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp flex justify-center items-center bg-gradient-to-br from-green-500 via-green-400 to-lime-300 w-[35px] h-[35px] rounded-md transition-all duration-300 hover:scale-[1.07] active:duration-[0.2s] shadow-[5px_5px_5px_0px_#000000FF]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="white"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"
            ></path>
          </svg>
        </a>
      </div>

      {/* Extra Info */}

      <div className="flex flex-col justify-start items-start w-[90%] mt-5 gap-[20px] bg-[#0f0f0f85] rounded-xl border border-[#00ff5e66] backdrop-blur-md p-[20px]">
        {/* Phone */}
        <div className="w-full flex justify-start items-center gap-[10px] phone">
          <div className="flex justify-center items-center gap-[10px] bg-[#053a00ff] p-3 rounded-md phoneDiv">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="#00ff5e"
            >
              <path d="M16.75 2h-10c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-10 18V4h10l.002 16H6.75z"></path>
              <circle cx="11.75" cy="18" r="1"></circle>
            </svg>
          </div>
          <div className="flex justify-center items-start flex-col gap-[2px] phoneInfo">
            <h6 className="poppins text-[12px] xs:text-[14px] sm:text-[12px] md:text-[14px] lg:text-[12px] xl:text-[14px] text-[#00ff5e]">
              Phone:
            </h6>
            <a
              href="tel:+923192924947"
              className="text-[#00ff5e] poppins-semibold text-[12px] xs:text-[14px] sm:text-[12px] md:text-[14px] lg:text-[12px] xl:text-[16px]"
            >
              +92 319 292 4947
            </a>
          </div>
        </div>
        <hr className="w-full h-[1px] text-[#00ff5e]" />
        {/* E-mail */}
        <div className="w-full flex justify-start items-center gap-[10px] email">
          <div className="flex justify-center items-center gap-[10px] bg-[#053a00ff] p-3 rounded-md emailDiv">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#00ff5e"
            >
              <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path>
            </svg>
          </div>
          <div className="flex justify-center items-start flex-col gap-[2px] emailInfo">
            <h6 className="poppins text-[12px] xs:text-[14px] sm:text-[12px] md:text-[14px] lg:text-[12px] xl:text-[14px] text-[#00ff5e]">
              E-mail:
            </h6>
            <a
              href="mailto:Taha82426980@gmail.com"
              className="text-[#00ff5e] poppins-semibold text-[12px] xs:text-[14px] sm:text-[12px] md:text-[14px] lg:text-[12px] xl:text-[16px]"
            >
              Taha82426980@gmail.com
            </a>
          </div>
        </div>
        <hr className="w-full h-[1px] text-[#00ff5e]" />
        {/* Location */}
        <div className="w-full flex justify-start items-center gap-[10px] location">
          <div className="flex justify-center items-center gap-[10px] bg-[#053a00ff] p-3 rounded-md locationDiv">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#00ff5e"
            >
              <path d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"></path>
              <path d="M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z"></path>
            </svg>
          </div>
          <div className="flex justify-center items-start flex-col gap-[2px] locationInfo">
            <h6 className="poppins text-[12px] xs:text-[14px] sm:text-[12px] md:text-[14px] lg:text-[12px] xl:text-[14px] text-[#00ff5e]">
              Location:
            </h6>
            <a
              href="https://www.google.com/maps/place/Karachi/@25.0740005,66.9469006,12z/data=!4m5!3m4!1s0x0:0x0!8m2!3d25.0740005!4d66.9469006"
              className="text-[#00ff5e] poppins-semibold text-[12px] xs:text-[14px] sm:text-[12px] md:text-[14px] lg:text-[12px] xl:text-[16px]"
            >
              Karachi, Pakistan
            </a>
          </div>
        </div>
        <hr className="w-full h-[1px] text-[#00ff5e]" />
        {/* Birthday */}
        <div className="w-full flex justify-start items-center gap-[10px] birthday">
          <div className="flex justify-center items-center gap-[10px] bg-[#053a00ff] p-3 rounded-md birthdayDiv">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#00ff5e"
            >
              <path d="M19 5h-6V2h-2v3H5C3.346 5 2 6.346 2 8v10c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.654-1.346-3-3-3zM5 7h14a1 1 0 0 1 1 1l.001 3.12c-.896.228-1.469.734-1.916 1.132-.507.45-.842.748-1.588.748-.745 0-1.08-.298-1.587-.747-.595-.529-1.409-1.253-2.915-1.253-1.505 0-2.319.724-2.914 1.253-.507.45-.841.747-1.586.747-.743 0-1.077-.297-1.582-.747-.447-.398-1.018-.905-1.913-1.133V8a1 1 0 0 1 1-1zM4 18v-4.714c.191.123.374.274.583.461C5.178 14.276 5.991 15 7.495 15c1.505 0 2.319-.724 2.914-1.253.507-.45.841-.747 1.586-.747s1.08.298 1.587.747c.595.529 1.409 1.253 2.915 1.253s2.321-.724 2.916-1.253c.211-.188.395-.34.588-.464L20.002 18H4z"></path>
            </svg>
          </div>
          <div className="flex justify-center items-start flex-col gap-[2px] birthdayInfo">
            <h6 className="poppins text-[12px] xs:text-[14px] sm:text-[12px] md:text-[14px] lg:text-[12px] xl:text-[14px] text-[#00ff5e]">
              Birthday:
            </h6>
            <p className="text-[#00ff5e] poppins-semibold text-[12px] xs:text-[14px] sm:text-[12px] md:text-[14px] lg:text-[12px] xl:text-[16px]">
              11th October
            </p>
          </div>
        </div>
      </div>

      {/* Download Resume */}

      <div className="w-full flex justify-center items-center mt-4">
        <a
          href="/TahaResume.pdf"
          target="_blank"
          className="bg-[#053a00ff] rounded-xl border border-[#00ff5e66] backdrop-blur-md py-[10px] px-[20px] text-[#00ff5e] poppins-semibold hover:border-[#053a00ff] hover:bg-[#00ff5e] hover:text-[#053a00ff] transition-all duration-400 hover:shadow-[0px_0px_50px_10px_rgba(5,_58,_0,_1)] w-[90%] text-center sm:w-[50%] lg:w-[90%] xl:w-[60%] hover:cursor-pointer"
        >
          Download Resume
        </a>
      </div>
    </aside>
  );
};

export default MyInfo;
