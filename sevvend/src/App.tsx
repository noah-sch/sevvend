import BGNoise from "./components/layout/BGNoise";

function App() {

    return (
        <>
            <div className="h-screen w-screen"
                style={
                    { backgroundColor: "rgb(23,23,23)" }
                }
            >
                <BGNoise opacity={0.07} grainSize={1}>
                    <div className="h-full w-full flex justify-center items-center">
                        <h1 className="text-neutral-300 text-6xl">
                            sevvend
                        </h1>
                    </div>
                </BGNoise>
            </div>
        </>
    )
}

export default App
