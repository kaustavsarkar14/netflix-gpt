import React from "react";

const ShimmerCards = () => {
  return Array(2)
    .fill()
    .map((cards) => (
      <div className="flex flex-col gap-4 py-4">
        <div className="h-7 w-40 bg-gray-700 rounded-sm animate-pulse"></div>
        <div className="flex overflow-x-scroll no-scrollbar gap-2">
          {Array(7)
            .fill()
            .map((card, index) => (
              <div
                key={index}
                className="w-44 min-w-[8rem] md:min-w-48 min-h-[12rem] md:h-72 md:min-h-72 bg-gray-700 rounded-sm animate-pulse"
              ></div>
            ))}
        </div>
      </div>
    ));
};

export default ShimmerCards;
