import BGNoise from "./components/layout/BGNoise";
import Navbar from "./components/layout/Navbar";

// Pages
import Home from "./pages/Home";

function App() {

    return (
        <>
            <div className="min-h-screen w-full overflow-auto"
                style={
                    { backgroundColor: "rgb(23,23,23)" }
                }
            >
                <BGNoise opacity={0.5} grainSize={1}>
                    <div className="h-full w-full">
                        <Navbar/>
                        <Home/>
                    </div>
                </BGNoise>
            </div>
        </>
    )
}

export default App
