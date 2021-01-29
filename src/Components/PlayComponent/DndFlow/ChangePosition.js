// export const pointToRendererPoint = (
//     { x, y }: XYPosition,
//     [tx, ty, tScale]: Transform,
//     snapToGrid: boolean,
//     [snapX, snapY]: [number, number]
//   ): XYPosition => {
//     const position: XYPosition = {
//       x: (x - tx) / tScale,
//       y: (y - ty) / tScale,
//     };
  
//     if (snapToGrid) {
//       return {
//         x: snapX * Math.round(position.x / snapX),
//         y: snapY * Math.round(position.y / snapY),
//       };
//     }
  
//     return position;
//   };