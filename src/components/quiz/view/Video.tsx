import React from "react";
import Videojs from "./VideoJs";

const Video = (props: any) => {
  const { autoPlay, controls, type } = props;
  const videoJsOptions = {
    autoplay: autoPlay,
    playbackRates: [0.5, 1, 1.25, 1.5, 2],
    width: 720,
    height: 350,
    controls: controls,
    sources: [
      {
        src: "//vjs.zencdn.net/v/oceans.mp4",
        type: type
      }
    ]
  };
  return <Videojs {...videoJsOptions} />;
};

export default Video;
