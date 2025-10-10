import { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { User } from "@/assets/icons/User";
import { Atom } from "@/assets/icons/Atom";
import { Rocket } from "@/assets/icons/Rocket";
import { FileStack } from "@/assets/icons/FileStack";

const Header = () => {
    const [hovered, setHovered] = useState(null);
    const navigate = useNavigate();

    const menuItems = [
        { to: "/", label: "About", Icon: User, key: "about" },
        { to: "/resume", label: "Resume", Icon: Atom, key: "resume" },
        { to: "/projects", label: "Projects", Icon: FileStack, key: "projects" },
        { to: "/contact", label: "Contact", Icon: Rocket, key: "contact" },
    ];

    const handleClick = (e, to) => {
        e.preventDefault(); // prevent default NavLink jump
        window.scrollTo({ top: 0, behavior: "smooth" }); // smooth scroll to top
        setTimeout(() => navigate(to), 200); // navigate after a short delay
    };

    return (
        <header className="hidden lg:flex sticky items-center justify-between w-[90%] py-4 px-20 top-0 z-[999] rounded-2xl select-none bg-[#0f0f0fb7] backdrop-blur-lg border border-[#00ff5e40] mt-5">
            {/* Logo */}
            <NavLink
                to="/"
                onClick={(e) => handleClick(e, "/")}
                className="flex justify-center items-center gap-[5px] text-4xl font-bold text-[#009b39] lilita group"
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
            </NavLink>

            {/* Navigation */}
            <nav>
                <ul className="flex gap-[20px]">
                    {menuItems.map(({ to, label, Icon, key }) => (
                        <li
                            key={key}
                            className="w-[90px] h-[90px] active:scale-[0.9]"
                            onMouseEnter={() => setHovered(key)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            <NavLink
                                to={to}
                                onClick={(e) => handleClick(e, to)}
                                className={({ isActive }) => {
                                    const activeOrHovered = isActive || hovered === key;
                                    return `flex flex-col justify-around items-center w-full h-full py-2 px-2 transition-all duration-300 rounded-2xl border border-[#00ff5e40] ${activeOrHovered
                                        ? "bg-[#00ff5e20] shadow-[3px_3px_6px_#00ff5e] text-white"
                                        : "bg-[#0f0f0f80] backdrop-blur-md text-[#009b39]"
                                        }`;
                                }}
                            >
                                {({ isActive }) => {
                                    const activeOrHovered = isActive || hovered === key;
                                    return (
                                        <>
                                            <Icon isHovered={activeOrHovered} />
                                            <span
                                                className={`lilita text-lg transition-all duration-300 ${activeOrHovered ? "text-white" : ""
                                                    }`}
                                            >
                                                {label}
                                            </span>
                                        </>
                                    );
                                }}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
