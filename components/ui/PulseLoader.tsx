import React from "react";
import Image from "next/image";

const PulseLoader = () => (
  <div className="flex items-center justify-center w-full h-full min-h-[200px] animate-pulse">
    <Image
      src="/logo.png"
      alt="Loading..."
      width={64}
      height={64}
      className="animate-pulse drop-shadow-lg"
      priority
    />
  </div>
);

export default PulseLoader;
