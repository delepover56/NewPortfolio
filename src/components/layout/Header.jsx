import { useState } from "react";
import { Link } from "react-router";
import { User } from "@/assets/icons/User";
import { Atom } from "@/assets/icons/Atom";
import { Rocket } from "@/assets/icons/Rocket";
import { FileStack } from "@/assets/icons/FileStack";

const Header = () => {
    // State to track hover for each menu item
    const [hovered, setHovered] = useState(null);

    return (
        <header className="hidden lg:flex sticky items-center justify-between w-[90%] py-4 px-20 top-[0] z-[999] rounded-2xl select-none bg-[#0f0f0fb7] backdrop-blur-lg border border-[#00ff5e40] mt-5">
            {/* Logo */}
            <Link
                to="/"
                className="flex justify-center items-center gap-[5px] text-4xl font-bold text-[#009b39] lilita group"
                id="logo"
            >
                {["T", "a", "h", "a", " ", "K", "h", "a", "n"].map((char, index) => (
                    <span
                        key={index}
                        className="transition-all duration-300 animate-[waveAnimation_3s_ease-in-out_infinite] text-shadow-[3px_3px_5px_rgba(0,0,0,0.3)] group-hover:text-white group-hover:text-shadow-none"
                        style={{ animationDelay: `calc(0.1s * ${index + 1})` }}
                    >
                        {char}
                    </span>
                ))}
            </Link>

            {/* Navigation */}
            <nav>
                <ul className="flex gap-[20px]">
                    <li
                        className="w-[90px] h-[90px] rounded-2xl bg-[#0f0f0f80] backdrop-blur-md border border-[#00ff5e40] hover:bg-[#00ff5e20] hover:shadow-[3px_3px_6px_#00ff5e] active:scale-[0.9]"
                        onMouseEnter={() => setHovered("about")}
                        onMouseLeave={() => setHovered(null)}
                    >
                        <Link
                            to="/"
                            className="flex flex-col justify-around items-center w-full h-full py-2 px-2 transition-all duration-300 group"
                        >
                            {/* Pass hover state to icon */}
                            <User isHovered={hovered === "about"} />
                            <span className="text-[#009b39] lilita text-lg transition-all duration-300 group-hover:text-[white]">About</span>
                        </Link>
                    </li>
                    <li
                        className="w-[90px] h-[90px] rounded-2xl bg-[#0f0f0f80] backdrop-blur-md border border-[#00ff5e40] hover:bg-[#00ff5e20] hover:shadow-[3px_3px_6px_#00ff5e] active:scale-[0.9]"
                        onMouseEnter={() => setHovered("resume")}
                        onMouseLeave={() => setHovered(null)}
                    >
                        <Link
                            to="/resume"
                            className="flex flex-col justify-around items-center w-full h-full py-2 px-2 transition-all duration-300 group"
                        >
                            {/* Pass hover state to icon */}
                            <Atom isHovered={hovered === "resume"} />
                            <span className="text-[#009b39] lilita text-lg transition-all duration-300 group-hover:text-[white]">Resume</span>
                        </Link>
                    </li>
                    <li
                        className="w-[90px] h-[90px] rounded-2xl bg-[#0f0f0f80] backdrop-blur-md border border-[#00ff5e40] hover:bg-[#00ff5e20] hover:shadow-[3px_3px_6px_#00ff5e] active:scale-[0.9]"
                        onMouseEnter={() => setHovered("projects")}
                        onMouseLeave={() => setHovered(null)}
                    >
                        <Link
                            to="/projects"
                            className="flex flex-col justify-around items-center w-full h-full py-2 px-2 transition-all duration-300 group"
                        >
                            {/* Pass hover state to icon */}
                            <FileStack isHovered={hovered === "projects"} />
                            <span className="text-[#009b39] lilita text-lg transition-all duration-300 group-hover:text-[white]">Projects</span>
                        </Link>
                    </li>
                    <li
                        className="w-[90px] h-[90px] rounded-2xl bg-[#0f0f0f80] backdrop-blur-md border border-[#00ff5e40] hover:bg-[#00ff5e20] hover:shadow-[3px_3px_6px_#00ff5e] active:scale-[0.9]"
                        onMouseEnter={() => setHovered("contact")}
                        onMouseLeave={() => setHovered(null)}
                    >
                        <Link
                            to="/contact"
                            className="flex flex-col justify-around items-center w-full h-full py-2 px-2 transition-all duration-300 group"
                        >
                            {/* Pass hover state to icon */}
                            <Rocket isHovered={hovered === "contact"} />
                            <span className="text-[#009b39] lilita text-lg transition-all duration-300 group-hover:text-[white]">Contact</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
