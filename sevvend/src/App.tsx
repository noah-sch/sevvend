import BGNoise from "./components/layout/BGNoise";
import GridOverlay from "./components/layout/GridOverlay";
import Navbar from "./components/layout/Navbar";

// Pages
import Home from "./pages/Home";

function App() {

    return (
        <>
            <div className="min-h-screen w-screen overflow-auto"
                style={
                    { backgroundColor: "rgb(23,23,23)" }
                }
            >
                <BGNoise opacity={0.05} grainSize={1}>
                    <div className="h-full w-full px-8">
                        <Navbar/>
                        <GridOverlay>
                            <Home/>
                        </GridOverlay>
                    </div>
                </BGNoise>
            </div>
        </>
    )
}

export default App
