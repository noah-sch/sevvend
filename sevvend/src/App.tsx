import BGNoise from "./components/layout/BGNoise";
import GridOverlay from "./components/layout/GridOverlay";

function App() {

    return (
        <>
            <div className="h-screen w-screen"
                style={
                    { backgroundColor: "rgb(23,23,23)" }
                }
            >
                <BGNoise opacity={0.05} grainSize={1}>
                    <div className="h-full w-full px-8">
                        <GridOverlay>
                            <h1 className="text-neutral-300 text-6xl">
                                sevvend
                            </h1>
                        </GridOverlay>
                    </div>
                </BGNoise>
            </div>
        </>
    )
}

export default App
