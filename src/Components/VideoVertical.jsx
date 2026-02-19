import React from "react";

const VideoVertical = () => {
  return (
      <div className="w-full flex justify-center">
        <div className="relative w-[85%] max-w-[300px] sm:max-w-[360px] md:max-w-[420px] aspect-[9/16]">
          <iframe
              src="https://www.youtube.com/embed/fBEwJMU_O-Y"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full rounded-xl"
          />
        </div>
      </div>
  );
};

export default VideoVertical;