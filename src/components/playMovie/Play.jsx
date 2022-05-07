import React from "react";
import "./Play.css";
import ReactPlayer from "react-player";

function Play() {
  return (
    <div className="Play">
      <div className="play_block">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=uMQnn8xU7qs"
          controls={true}
        />
      </div>
    </div>
  );
}

export default Play;
