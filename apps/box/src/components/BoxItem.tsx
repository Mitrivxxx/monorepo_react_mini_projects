import React from "react";
import type{ BoxConfig } from "../data/box";


const BoxItem: React.FC<{ box: BoxConfig }> = ({ box }) => {
  return (
    <div
      style={{
        backgroundColor: box.color,
        width: box.width,
        height: box.height
      }}>


      </div>
  )
}

export default BoxItem;