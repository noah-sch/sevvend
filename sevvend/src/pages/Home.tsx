import Hero from "../components/sections/homeSections/Hero";
import Test from "../components/sections/homeSections/Test";

export default function Home() {
    return(
        <>
            <div className="w-full flex flex-col justify-start items-start">
                <Hero/>
                <Test></Test>

            </div>
        </>
    )
}