import React, { useState } from "react";

interface LightBarProps {
  color?: string;
  index?: number;
  lightIndex?: number;
}

function LightBar({
  color = "black",
  index = -1,
  lightIndex = -1,
}: LightBarProps) {
  return lightIndex === index ? (
    <div className={`${color} circle`}></div>
  ) : null;
}

export const FunctionalTrafficLight: React.FC = () => {
  const [lightIndex, setLightIndex] = useState<number>(0);

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        <LightBar color="red" index={2} lightIndex={lightIndex} />
        <LightBar />
        <LightBar color="yellow" index={1} lightIndex={lightIndex} />
        <LightBar />
        <LightBar color="green" index={0} lightIndex={lightIndex} />
      </div>
      <button
        onClick={() => setLightIndex((lightIndex + 1) % 3)}
        className="next-state-button"
      >
        Next State
      </button>
    </div>
  );
};
