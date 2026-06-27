import React from "react";

const Background = () => {
  return (
    <>
      <div
        className="fixed inset-0 -z-10 bg-[length:20px_20px] pointer-events-none opacity-20"
        style={{
          backgroundImage: "radial-gradient(white 1px, transparent 1px)",
        }}
      />
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background: "black",
          maskImage:
            "radial-gradient(ellipse at center, transparent 20%, black)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, transparent 20%, black)",
        }}
      />
    </>
  );
};

export default Background;
