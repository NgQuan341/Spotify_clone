import React from "react";

export default function () {
  return (
    <div className="col-span-1 p-3">
      <h2 className="text-cyan-500 font-bold">Now playing</h2>
      <h2 className="text-neutral-400 text-2xl">Sing me to sleep</h2>
      <div className="w-[240px] m-auto mt-10">
        <img className="w-full" src="http://localhost:3000/images/logomixigaming.jpg" alt="avt"></img>
      </div>
      <div className="flex justify-evenly items-center mt-10">
        <img className="w-[70px] rounded-full" src="http://localhost:3000/images/logomixigaming.jpg" alt="avt"></img>
        <span className="text-xl text-white">name singer</span>
      </div>
    </div>
  );
}
