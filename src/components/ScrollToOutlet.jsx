import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollToOutlet() {
    const { pathname } = useLocation();

    useEffect(() => {
        if (window.innerWidth >= 1024) return; // only apply for mobile

        // Wait for React to render new route
        requestAnimationFrame(() => {
            // Select the outlet container inside your layout
            const outlet = document.querySelector("main > div > :nth-child(2)");

            // Explanation:
            // main
            // └── div (your flex container)
            //     ├── MyInfo (1st child)
            //     └── Outlet (2nd child)

            if (outlet) {
                outlet.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    }, [pathname]);

    return null;
}
