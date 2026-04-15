import { useState } from "react";

import WordHoverEffect from "./ui/WordHoverEffect";

export default function Menu() {

    const [language, setLanguage] = useState<"EN" | "FR">("EN");

    return(
        <>
            <div className="fixed top-20 left-1/2 h-[65vh] w-[21.5vw] flex flex-col items-start justyfy-start bg-black text-neutral-100 z-50 p-8">
                <div className="flex w-full flex-col items-start justify-start gap-8">
                    <div className="text-xl font-semibold cursor-pointer">
                        sevvend
                    </div>
                    <div className="flex flex-col items-start justify-start gap-1.5">
                        {["home", "about", "leakw.id", "other works", "blog", "contact", "404"].map((page) => (
                            <>
                                <div className="text-sm font-semibold">
                                    <WordHoverEffect word={page.toUpperCase()} />
                                </div>
                            </>
                        ))}
                    </div>
                    <div className="w-full flex flex-col items-end justify-start gap-1.5">
                        <div className="text-2xl font-bold cursor-pointer hover:bg-neutral-100 hover:text-black">
                            CTNT@SEVVEND.COM
                        </div>
                        <div className="text-neutral-400 text-sm font-semibold cursor-pointer hover:bg-neutral-400 hover:text-black">
                            (+33) 7 77 77 77 77
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-2 text-sm font-semibold">
                        <div className={`border-b ${language === "EN" ? "border-b-neutral-100" : "border-b-black"}`}
                            onClick={() => setLanguage("EN")}
                        >
                            <WordHoverEffect word={"EN"}/>
                        </div>
                        <div className={`border-b ${language === "FR" ? "border-b-neutral-100" : "border-b-black"}`}
                            onClick={() => setLanguage("FR")}
                        >
                            <WordHoverEffect word={"FR"}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}