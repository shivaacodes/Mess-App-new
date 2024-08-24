import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar"
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <div className="flex justify-between items-center">
      <Sidebar className="div"/>
      <Navbar className="div"/>
      </div>
      <Dashboard />
      
    </div>
  );
}

export default App;
