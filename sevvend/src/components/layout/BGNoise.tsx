import { useEffect, useRef } from "react";
import React from "react";


type BGNoiseProps = {
    children: React.ReactNode;
    opacity: number;
    grainSize: number;
};

export default function BGNoise( {children, opacity, grainSize}: BGNoiseProps ) {

    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resize = () => {
            const rect = canvas.getBoundingClientRect();

            if (rect.width === 0 || rect.height === 0) return;

            canvas.width = rect.width;
            canvas.height = rect.height;

            generateNoise();
        };

        const generateNoise = () => {
            const width = canvas.width;
            const height = canvas.height;
            const imageData = ctx.createImageData(width, height);
            const data = imageData.data;

            for (let i = 0; i < data.length; i += 4) {
                const random = Math.random() * 255;

                data[i] = random;
                data[i + 1] = random;
                data[i + 2] = random;
                data[i + 3] = opacity * 255;
            }

            ctx.putImageData(imageData, 0, 0);
        };

        resize();
        window.addEventListener("resize", resize);

        return () => {
            window.removeEventListener("resize", resize);
        };
    }, [opacity, grainSize])

    return(
        <>
            <div className="relative w-full h-full overflow-hidden">
                <canvas ref={canvasRef}
                    className="absolute inset-0 w-full h-full pointer-events-none z-0"
                    style={
                        { imageRendering: grainSize > 1 ? "pixelated" : "auto" }
                    }
                />

                {/* children */}
                <div className="relative w-full h-full z-10"> {/* possible pb de z-index ? */}
                    {children}
                </div>
            </div>
        </>
    )
}