import { useHuddleStore } from "@huddle01/huddle01-client/store";
import React, { useEffect, useRef } from "react";

const MeVideoElem = () => {
  const stream = useHuddleStore((state) => state.stream);
  const isCamPaused = useHuddleStore((state) => state.isCamPaused);

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.srcObject = stream;
    }
    console.log({ stream });
  }, [stream]);
  return (
    <video
      style={{ width: "100%", height: "50vh", objectFit: 'cover' }}
      ref={videoRef}
      autoPlay
      muted
      playsInline
    ></video>
  );
};

export default MeVideoElem;
