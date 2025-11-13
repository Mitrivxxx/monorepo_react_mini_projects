import BoxItem from "./BoxItem";
import type { BoxConfig } from "../data/box";
import {boxes} from "../data/box"


export const BoxGrid: React.FC<{  }> = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 150px)",
        gap: "10px"
      }}
    >
      {boxes.map((box) => (
        <BoxItem key={box.id} box={box} />
      ))}
    </div>
  );
};

export default BoxGrid;