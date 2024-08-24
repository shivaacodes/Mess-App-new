import React from "react";

export default function Dashboard() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 p-8">
      <div className="bg-white rounded-3xl p-8 w-full max-w-[90vw] h-full max-h-[80vh] flex flex-col items-center">
        <div className="bg-gray-300 rounded-full h-24 w-24 flex items-center justify-center mb-4">
          <img
            src="/assets/IMG_1456.JPG"
            alt="profile"
            className="h-full w-full object-cover rounded-full"
          />
        </div>

        <h2 className="text-2xl font-bold text-gray-800">Shiva Sajay</h2>
      </div>
    </div>
  );
}
