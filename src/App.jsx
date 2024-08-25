import React from "react";
import {Route,Routes} from "react-router-dom"
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import BillCard from "./pages/Messfees";
import MessCut from "./pages/Messcuts";
import Feedback from "./pages/Feedback"

function App() {
  return (
    <>
    <div>
      <Sidebar className="w-1/4" />
      <div className="flex-1 flex flex-col">
        <Navbar />

        <div className="route">
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/messfee" element={<BillCard/>}/>
          <Route path="/messcut" element={<MessCut/>}/>
          <Route path="/feedback" element={<Feedback/>}/>
        </Routes>
        </div>

      </div>
      {/* <div className="flex justify-end p-4 h-screen">
        <div className="w-1/3">
          <BillCard />
        </div>
      </div> */}

    </div>
    </>
  );
}

export default App;
