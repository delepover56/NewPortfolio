/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";

const SkillCard = ({ title, percentage }) => {
  const [count, setCount] = useState(0);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && count === 0) {
          let start = 0;
          const duration = 1500;
          const fps = 30;
          const increment = percentage / (duration / fps);

          const interval = setInterval(() => {
            start += increment;
            if (start >= percentage) {
              setCount(percentage);
              clearInterval(interval);
            } else {
              setCount(Math.ceil(start));
            }
          }, 1000 / fps);
        }
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, [count, percentage]);

  return (
    <div className="group w-56 xs:w-68 sm:w-70 h-40 flex justify-around items-start gap-3 flex-col border border-[#00ff5e99] rounded-2xl bg-[#0f0f0fb7] p-5 mt-8 hover:transform hover:scale-102 transition-all duration-300 shadow-[0_0_10px_#00ff5e55] hover:shadow-[1px_2px_4px_0px_#00ff5e] select-none">
      <div ref={cardRef} className="flex justify-between items-center gap-2">
        <h2
          className="text-[#00ff5e] roboto-slab text-md relative pointer-default
          after:content-[''] after:absolute after:h-[2px] after:w-full after:bg-[#00ff5e]
          after:bottom-0 after:left-[-300px] after:opacity-0 after:transition-all after:duration-300
          group-hover:after:left-0 group-hover:after:opacity-100 overflow-x-hidden"
        >
          {title}
        </h2>
        <span className="bg-[#053a00ff] w-[4.1em] xs:w-[3.1em] sm:w-[3em] h-[3em] rounded-4xl flex justify-center items-center shadow-[0_0_10px_#00ff5e55] border border-[#00ff5e66] hover:scale-105 transition-transform duration-300 cursor-default">
          <p className="poppins-medium text-sm text-[#00ff5e]">{count}%</p>
        </span>
      </div>
      <div className="w-full h-2 bg-[#053a00ff] rounded-lg ">
        <div
          className="h-full bg-[#00ff5e] rounded-lg transition-all duration-100 ease-in-out shadow-[0_0_10px_#00ff5e55] hover:shadow-[1px_2px_4px_0px_#00ff5e]"
          style={{ width: `${count}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillCard;
