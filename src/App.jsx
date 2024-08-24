import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import BillCard from "./pages/Messfees";

function App() {
  return (
    <div>
      {" "}
      {/*className="App flex h-screen">
      <Sidebar className="w-1/4" />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <Dashboard />
      </div>*/}
      <div className="flex justify-end p-4 h-screen">
        <div className="w-1/3">
          <BillCard />
        </div>
      </div>
    </div>
  );
}

export default App;
