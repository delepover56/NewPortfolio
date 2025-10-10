import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { to: "/", label: "About" },
    { to: "/resume", label: "Resume" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  const handleClick = (to) => {
    setIsOpen(false); // close menu
    navigate(to); // navigate immediately
    // window.scrollTo({ top: 0, behavior: "smooth" }); // scroll on new page
  };

  return (
    <header className="sticky overflow-hidden lg:hidden top-0 w-[90%] z-[100] justify-self-center mt-5">
      {/* Top Bar */}
      <div className="relative flex justify-between items-center p-4 bg-[#0f0f0f80] backdrop-blur-md border-b border-[#00ff5e40] rounded-2xl">
        <button
          onClick={() => handleClick("/")}
          className="text-[#00ff5e] lilita tracking-widest text-[clamp(1.5rem,3vw,2.5rem)] uppercase"
        >
          Taha Khan
        </button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#00ff5e] text-3xl transition-transform duration-300 hover:scale-110"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#0f0f0f60] backdrop-blur-xl border-l border-[#00ff5e40] z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? "translate-x-0" : "translate-x-[330px]"
          }`}
      >
        <div className="relative w-full flex justify-center items-center bg-[#0f0f0f70] border-b border-[#00ff5e40] py-6 mb-6">
          <button
            onClick={() => handleClick("/")}
            className="text-[#00ff5e] lilita uppercase tracking-widest text-3xl"
          >
            Taha Khan
          </button>

          <button
            onClick={() => setIsOpen(false)}
            className="absolute left-[-55px] top-1/2 -translate-y-1/2 text-[#00ff5e] text-2xl bg-[#0f0f0f80] border border-[#00ff5e40] rounded-md px-[10px] pt-1 pb-[5px] hover:bg-[#00ff5e] hover:text-black transition-all backdrop-blur-md"
          >
            ✕
          </button>
        </div>

        <ul className="flex flex-col justify-start items-start w-full text-lg font-medium">
          {menuItems.map(({ to, label }) => (
            <li key={to} className="w-full transition-colors duration-200">
              <NavLink
                to={to}
                onClick={() => handleClick(to)}
                className={({ isActive }) =>
                  `flex items-center py-3 px-10 w-full gap-3 transition-colors lilita text-[clamp(1rem,2.5vw,1.5rem)] ${isActive
                    ? "bg-[#1a1a1a80] backdrop-blur-md text-[#00ff5e]"
                    : "text-[#e6e6e6] hover:text-[#00ff5e] hover:bg-[#1a1a1a80] hover:backdrop-blur-md"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default MobileHeader;
