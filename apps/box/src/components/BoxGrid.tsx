import BoxItem from "./BoxItem";
import type { BoxConfig } from "../data/box";


export const BoxGrid: React.FC<{ boxes: BoxConfig[] }> = ({ boxes }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(30px, 1fr))",
        gap: "10px",
      }}
    >
      {boxes.map((box) => (
        <BoxItem key={box.id} box={box} />
      ))}
    </div>
  );
};

export default BoxGrid;