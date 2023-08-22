import React from 'react';

function BottomContainer() {
  return (
    <div
      className="w-4/5 z-10 relative h-[560px] bg-cover bg-center flex justify-center mt-20 mx-[10%]"
      style={{
        backgroundImage: `url('asset/nature.jpg')`,
      }}
    >
      <div class="bg-[rgb(245,206,180)] w-[65%] h-max bg-opacity-50 p-6 rounded-lg shadow-md backdrop-blur-md mt-10 flex flex-col items-center">
        <h2 class="text-4xl font-semibold mb-2">
          Every inspiration from nature
        </h2>
        <p class="text-gray-700 text-lg mt-2">
          Get started by using our service with a 30-days free trial
        </p>
        <button className="w-[160px] bg-black text-white px-10 py-1 rounded-lg mt-16 mb-10 transition-transform transform hover:scale-105">
          Try it now
        </button>
      </div>
    </div>
  );
}

export default BottomContainer;
