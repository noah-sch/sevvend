import { useRef, useEffect } from "react";
import Section from "../../components/section/Section";

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
            <div className="relative h-full w-full">
                <Section theme={"halflight"} topMarkers={false}>
                    <div className="relative w-full h-[120vh] grid grid-cols-2 z-20">
                        <div className="col-start-2">
                            {/* texte, etc. */}
                        </div>
                    </div>
                </Section>

                <div className="absolute left-0 top-0 h-full w-8/19 z-10">
                    <img src="../../medias/shivansh-sharma-ZQPZIAz-2co-unsplash.jpg" className="h-full w-full object-cover opacity-95" />
                </div>

                <div className="absolute top-0 left-0 w-full h-screen flex items-center justify-center z-30 mix-blend-difference px-10">
                    <h1 ref={titleRef} className="font-bold text-white whitespace-nowrap">
                        WTF IS THIS ABOUT?
                    </h1>
                </div>
            </div>
        </>
    )
}