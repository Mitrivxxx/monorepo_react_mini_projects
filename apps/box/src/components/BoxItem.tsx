import React from "react";
import type{ BoxConfig } from "../data/box";
import { useState } from "react";
import { randColor } from "../data/box";

const BoxItem: React.FC<{ box: BoxConfig }> = ({ box }) => {
  const [color, setColor] = useState<string>(box.color);

  const handleClick = () => {
    let newColor = randColor();
    // zabezpieczenie, żeby nie wylosował tego samego koloru
    while (newColor === color) {
      newColor = randColor();
    }
    setColor(newColor);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        backgroundColor: color,
        width: box.width ?? 150,
        height: box.height ?? 150,
        borderRadius: "8px",
        cursor: "pointer",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
    />
  );
};


export default BoxItem;