// Define type Circle with a kind property and a radius property
export type Circle = {
  kind: "circle";
  radius: number;
};

// Define type Rectangle with a kind property, width property, and height property
export type Rectangle = {
  kind: "rectangle";
  width: number;
  height: number;
};

// Define type Square with a kind property and a sideLength property
export type Square = {
  kind: "square";
  sideLength: number;
};

// Define a discriminated union type Shape that can be either a Circle, Rectangle, or Square
export type Shape = Circle | Rectangle | Square;

// Function to calculate the area of a given shape depending on its kind
export function calculateArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "rectangle":
      return shape.width * shape.height;
    case "square":
      return shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}
