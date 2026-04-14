import type { sectionTheme } from "../../types/sectionThemeType";

type MarkerProps = {
    pos: string;
    theme: sectionTheme["theme"];
}

export default function Marker( {pos, theme}: MarkerProps) {

    const markThemeClass = 
        theme === "dark"
            ? "text-light"
            : "text-dark";


    return(
        <>
            <div
                key={pos}
                className={`absolute top-0 -translate-y-1/2 -translate-x-1/2 z-30 text-xs font-light select-none pointer-events-none flex items-center justify-center w-4 h-4 ${markThemeClass}`}
                style={{ left: pos }}
            >
                +
            </div>
        </>
    )
}