import React from "react";

type GridOverlayProps = {
    children: React.ReactNode;
}

export default function GridOverlay( {children}: GridOverlayProps ) {
    return(
        <>
            <div className="relative h-full w-full z-10 border-l border-l-neutral-500/20">

                {/* GRID */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                    backgroundImage: `
                        repeating-linear-gradient(
                        to right,
                        transparent,
                        transparent calc(25% - 1px),
                        rgba(115, 115, 115, 0.2) calc(25% - 1px),
                        rgba(115, 115, 115, 0.2) 25%
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