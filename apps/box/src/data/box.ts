export interface BoxConfig {
    id: number,
    color: string,
    width?: number,
    height?: number
}
const myColors:string[] = ["red", "blue", "green", "yellow", "purple", "orange"];
export const randColor = () => myColors[Math.floor(Math.random() * myColors.length)] ?? "red"; 

export const boxes: BoxConfig[] = [];

for (let i = 1; i <= 9; i++) {
    boxes.push({
    id: i,
    color: randColor()
  });
}


