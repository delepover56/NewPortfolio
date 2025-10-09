import React from "react";

const Background = () => {
  return (
    <video
      className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      autoPlay
      loop
      muted
      playsInline
    >
      <source src="/Videos/background.webm" type="video/webm" />
    </video>
  );
};

export default Background;
