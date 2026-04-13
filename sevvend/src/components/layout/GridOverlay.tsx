import React from "react";

type GridOverlayProps = {
    children: React.ReactNode;
}

export default function GridOverlay( {children}: GridOverlayProps ) {
    return(
        <>
            <div className="relative h-full w-full overflow-hidden z-10 border-x border-x-neutral-800">

                {/* GRID */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                    backgroundImage: `
                        repeating-linear-gradient(
                        to right,
                        transparent,
                        transparent calc(25% - 1px),
                        rgb(38 38 38) calc(25% - 1px),
                        rgb(38 38 38) 25%
                        )
                    `,
                    }}
                />

                {/* children */}
                <div className="relative h-full w-full z-20">
                    {children}
                </div>
            </div>
        </>
    )
}