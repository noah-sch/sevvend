import React from "react";

import type { sectionTheme } from "../../types/sectionThemeType";

import Marker from "./Marker";

type SectionProps = {
    children: React.ReactNode;
    theme: sectionTheme["theme"];
    topMarkers: boolean;
}

export default function Section( {children, theme, topMarkers}: SectionProps ) {

    const bgThemeClass = 
        theme === "dark"
            ? "bg-dark"
            : theme === "light" 
                ? "bg-light"
                : "bg-halflight";

    const markPos = ["0%", "100%"];
    
    return(
        <>
            <div className={`relative w-full border-t border-t-neutral-800 ${bgThemeClass}`}>
                {topMarkers && markPos.map((pos) => (
                    <Marker pos={pos} theme={theme} />
                ))}

                {/* children */}
                <div className="relative w-full z-20">
                    {children}
                </div>
            </div>
        </>
    )
}