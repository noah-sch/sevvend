export default function Navbar() {
    return(
        <>
            <div className="fixed top-0 left-0 w-full grid grid-cols-2 z-40 mix-blend-difference backdrop-blur-xl pt-6">

                {/* logo */}
                <div className="col-span-1 flex flex-row justify-start items-center pl-10">
                    <div>

                    </div>
                    <span className="text-4xl text-white font-semibold">
                        sevvend
                    </span>
                </div>

                {/* menu */}
                <div className="col-span-1 flex flex-row justify-start items-end">
                    <span className="text-white text-2xl leading-none">
                        ×
                    </span>
                    <span className="text-white">
                        MENU
                    </span>
                </div>
            </div>
        </>
    )
}