import ScannerPage from "./component/ScannerPage";
import MainPage from "./component/MainPage";
import './App.css'

import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Navigation from "./component/Navigation";
import {Style} from "./Style";
import PenaltyPage from "./component/PenaltyPage";
import AttendancePage from "./component/AttendancePage";


function App() {
    return (
        <div className="App" style={{width: "100%", height: "100vh", display:"flex", justifyContent: "center", alignItems: "center"}}>
            <div style={{width: "90%"}}>
                <BrowserRouter>
                    <Navigation/>
                    <Routes>
                        <Route path="/" element={<MainPage/>}/>
                        <Route path="/scanner" element={<ScannerPage/>}/>
                        <Route path="/penalty" element={<PenaltyPage/>}/>
                        <Route path="/attendance" element={<AttendancePage/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    )
        ;
}

export default App;
