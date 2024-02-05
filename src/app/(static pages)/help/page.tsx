import Image from "next/image";
import React from "react";

const help = () => {
  return (
    <div className="mt-7 w-full h-fit px-10 xl:px-auto py-10 bg-green-500 md:text-left text-center text-white flex md:flex-row flex-col lg:justify-between justify-center items-center align-middle gap-x-4 lg:pr-40 space-y-5 shadow-xl shadow-green-500/50">
      <div className="space-y-3 lg:w-1/2">
        <h1 className="text-6xl font-bold font-poppins">
          How can we help you today?
        </h1>
        <p className="text-lg ml-1 mt-2 text-white">
          Welcome to Taha Render Forum Center
        </p>
      </div>

      <Image
        src="/Green Robot Helping you.png"
        width={2048}
        height={2048}
        draggable={false}
        className="w-96 aspect-square h-96"
        alt="Help Page Image"
      />
    </div>
  );
};
// rid sm:grid-cols-2 grid-cols-1 gap-y-6 justify-between
export default help;
