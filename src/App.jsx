import React from "react";
import Sidebar from "./components/Sidebar"; // Adjust the path if needed

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="p-8">
        <h1 className="text-3xl font-bold">Main Content Area</h1>
        <p>This is the main content area of your application.</p>
      </div>
    </div>
  );
}

export default App;
