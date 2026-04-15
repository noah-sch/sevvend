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
                className={`absolute top-0 -translate-y-[calc(50%+2.5px)] -translate-x-[calc(50%+0.5px)] text-xl z-30 font-light select-none pointer-events-none flex items-center justify-center w-4 h-4 ${markThemeClass}`}
                style={{ left: pos }}
            >
                +
            </div>
        </>
    )
}