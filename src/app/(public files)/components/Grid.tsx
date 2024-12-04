import React from "react";

function Grid() {
  return (
    <div className="bg-[#FCEECB]">
        <h1 className="text-3xl text-center text-[#F39770] font-bold">Grid Layout</h1>
    <div className="grid grid-cols-10 p-10 h-screen gap-5">
      <div className="bg-[#70D9D2] col-span-2 flex items-center justify-center rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <span className="text-white font-semibold text-xl">Left Side</span>
      </div>
      <div className="bg-[#FBE7B2] col-span-6 grid text-center rounded-lg shadow-lg p-5 gap-5">
        <span className="text-[#F39770] font-bold text-2xl mb-5">Centre</span>

        <div className="grid grid-cols-6 gap-4">
          <div className="bg-[#EFA09C] flex items-center justify-center col-span-3 rounded-md shadow hover:scale-105 transition-transform duration-300">
            <span className="text-white font-semibold text-lg">Upper 1st</span>
          </div>
          <div className="bg-[#EFA09C] flex items-center justify-center col-span-3 rounded-md shadow hover:scale-105 transition-transform duration-300">
            <span className="text-white font-semibold text-lg">Upper 2nd</span>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-4">
          <div className="bg-[#F39770] col-span-2 row-span-1 flex items-center justify-center rounded-md shadow hover:bg-opacity-80 transition-colors duration-300">
            <span className="text-white font-semibold text-lg">Bottom Left</span>
          </div>
          <div className="bg-[#F9D77E] grid col-span-4 text-center rounded-lg shadow p-4">
            <span className="text-[#F39770] font-bold text-xl mb-4">Bottom General</span>

            <div className="grid grid-cols-2 gap-5">
              <div className="bg-[#EFA09C] row-span-3 flex items-center justify-center rounded-md shadow hover:scale-105 transition-transform duration-300">
                <span className="text-white font-semibold text-lg">Bottom 1st</span>
              </div>
              <div className="bg-[#EFA09C] row-span-3 flex items-center justify-center rounded-md shadow hover:scale-105 transition-transform duration-300">
                <span className="text-white font-semibold text-lg">Bottom 2nd</span>
              </div>
            </div>
            <div className="bg-[#EBA1C4] row-span-3 flex items-center justify-center mt-4 rounded-md shadow hover:scale-105 transition-transform duration-300">
              <span className="text-white font-semibold text-lg">Bottom Last</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#70D9D2] col-span-2 flex items-center justify-center rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <span className="text-white font-semibold text-xl">Right Side</span>
      </div>
    </div>
    </div>
  );
}

export default Grid;
