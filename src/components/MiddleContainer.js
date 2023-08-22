import React from 'react';

function MiddleContainer() {
  return (
    <>
      <div className="relative h-56 w-[99.9%] mx-auto flex justify-center mt-10">
        <img
          src="asset/original.jpg"
          alt="original"
          className="absolute top-0 w-full h-full opacity-60"
        ></img>
        <h1 className="text-5xl font-bold tracking-wide mt-6 opacity-100 z-10">
          Building the future
        </h1>
      </div>
      <div className="w-4/5 flex mt-10 mx-[10%]">
        <img
          src="asset/work culture.png"
          alt="culture"
          className="rounded-lg w-[60%] h-50 shadow-xl"
        ></img>
        <div className="w-[40%] text-[85px] pl-6 tracking-wide font-bold leading-tight">
          Features
          <br />
          <span className="text-orange-500">Ought </span>to <br />
          Partake
        </div>
      </div>
      <div className="w-4/5 grid grid-cols-2 gap-10 mx-[10%] mt-14">
        <img
          src="asset/plant.jpg"
          alt="plant"
          className="h-[350px] rounded-lg border-r-2 shadow-xl border-b-2 hover:scale-105 transition-transform duration-200 "
        ></img>
        <img
          src="asset/earth.png"
          alt="earth"
          className="h-[350px] rounded-lg border-2 shadow-xl hover:scale-105 transition-transform duration-200"
        ></img>
      </div>
    </>
  );
}

export default MiddleContainer;
