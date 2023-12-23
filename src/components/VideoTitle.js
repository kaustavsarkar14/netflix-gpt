import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute bg-gradient-to-t md:bg-gradient-to-r from-black min-h-[50%] md:min-h-screen px-10 pt-[16%] md:pt-[10%] flex flex-col gap-4">
      <h1 className="text-2xl md:text-6xl font-bold  w-[60%] md:w-[30%]">
        {title}
      </h1>
      <p className=" w-[60%] text-xs md:text-sm md:w-[30%]">{overview}</p>
      <div className="flex gap-3">
        <button className="bg-white text-black w-32 p-2 font-semibold rounded-lg hover:bg-opacity-90">
          Play
        </button>
        <button className="bg-white bg-opacity-20 hover:bg-opacity-10 backdrop-blur-md text-white w-32 p-2 font-semibold rounded-lg">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
