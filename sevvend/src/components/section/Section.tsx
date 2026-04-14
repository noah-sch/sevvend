import React from "react";

import type { sectionTheme } from "../../types/sectionThemeType";

import Marker from "./Marker";
import GridOverlay from "../layout/GridOverlay";
import BGNoise from "../layout/BGNoise";

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
            <div className={`w-full ${bgThemeClass}`}>
                <BGNoise opacity={0.05} grainSize={1}>
                    <div className="relative w-full px-10">
                        <div className="absolute left-0 top-6 -translate-y-px w-full border-t border-t-neutral-500/20"/>
                        <GridOverlay> 
                            <div className="pt-6">
                                <div className="relative ">
                                    {topMarkers && markPos.map((pos) => (
                                        <Marker pos={pos} theme={theme} />
                                    ))}
                                    

                                    {/* children */}
                                    <div className="relative w-full z-20">
                                        {children}
                                    </div>
                                </div>
                            </div>
                        </GridOverlay>
                    </div>
                </BGNoise>
            </div>
        </>
    )
}