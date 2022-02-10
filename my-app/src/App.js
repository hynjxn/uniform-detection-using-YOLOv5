import ScannerPage from "./component/page/ScannerPage";
import MainPage from "./component/page/MainPage";
import './App.css'

import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Navigation from "./component/template/Navigation";
import {Style} from "./Style";
import PenaltyPage from "./component/page/PenaltyPage";
import AttendancePage from "./component/page/AttendancePage";



function App() {
  return (
      <div className="App" style={{width: "100%", height: "100vh", backgroundColor: Style.color3}}>
      <BrowserRouter>
          <Navigation />
          <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/scanner" element={<ScannerPage />} />
              <Route path="/penalty" element={<PenaltyPage />} />
              <Route path="/attendance" element={<AttendancePage />} />


          </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
