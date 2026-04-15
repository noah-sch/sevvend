import { useRef, useEffect } from "react";

import Section from "../Section";
import GitHubTicket from "../../ui/GitHubTicket";

export default function Hero() {
    const titleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const el = titleRef.current;
        if (!el) return;

        const fit = () => {
            el.style.fontSize = "100px";
            el.style.width = "max-content";
            const naturalWidth = el.offsetWidth;
            el.style.width = "";

            const parent = el.parentElement!;
            const { paddingLeft, paddingRight } = getComputedStyle(parent);
            const availableWidth = parent.clientWidth - parseFloat(paddingLeft) - parseFloat(paddingRight);

            el.style.fontSize = `${(availableWidth / naturalWidth) * 100}px`;
        };

        fit();
        window.addEventListener("resize", fit);
        return () => window.removeEventListener("resize", fit);
    }, []);

    return(
        <>
            {/* Relative */}
            <div className="relative h-full w-full">
                <Section theme={"halflight"} topMarkers={false}>
                    <div className="w-full h-[120vh] grid grid-cols-2 z-20">

                        {/* Relative */}
                        <div className="relative col-start-2 w-full h-full grid grid-cols-2">
                            <div className="col-start-2 w-full h-full flex flex-col items-center justify-start z-50 pt-4">
                                <div className="w-full flex flex-row items-center justify-end">
                                    <GitHubTicket />
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
                
                {/* Absolute */}
                <div className="absolute left-0 top-0 h-full w-8/19 z-10 pointer-events-none">
                    <img src="../../medias/shivansh-sharma-ZQPZIAz-2co-unsplash.jpg" className="h-full w-full object-cover opacity-95" />
                </div>

                {/* Absolute */}
                <div className="absolute top-0 left-0 w-full h-screen z-20 mix-blend-difference px-10 pointer-events-none">
                    <div className="w-full h-full flex flex-col items-center justify-center">
                        <h1 ref={titleRef} className="font-bold text-white whitespace-nowrap leading-none">
                            WTF IS THIS ABOUT?
                        </h1>
                        <div className="grid grid-cols-2">
                            <div className="col-span-1 col-start-2">
                                <h2 className="text-5xl font-bold text-white z-40">
                                    SOME FEATURED PROJECTS
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}