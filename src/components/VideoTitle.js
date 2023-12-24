import React from "react";
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute bg-gradient-to-t md:bg-gradient-to-r from-black min-h-[50%] md:min-h-screen md:px-10 px-3 pt-[16%] md:pt-[10%] flex flex-col gap-4">
      <h1 className="text-2xl md:text-6xl font-bold  w-[60%] md:w-[30%]">
        {title}
      </h1>
      <p className=" w-[60%] text-xs md:text-sm md:w-[30%]">{overview}</p>
      <div className="flex gap-3">
        <button className="flex gap-2 justify-center items-center bg-white text-black w-36 p-2 font-semibold rounded-lg hover:bg-opacity-90">
          <PlayArrowRoundedIcon/><h1>Play</h1>
        </button>
        <button className="flex gap-2 justify-center items-center bg-white bg-opacity-20 hover:bg-opacity-10 backdrop-blur-md text-white w-36 p-2 font-semibold rounded-lg">
          <InfoOutlinedIcon/><h1>More info</h1>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
