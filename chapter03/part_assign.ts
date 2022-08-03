// from array
const array = [1, 2, 3, 4, 5];
const [first, ...others] = array;
console.log(first, others);

// from object
const transparent = { r: 0.0, g: 0.0, b: 0.0 };
const { r, g, b } = transparent;
console.log(r, g, b);

// from object(module)
const { sin, cos, tan } = Math;
console.log(sin(0), cos(0), tan(0));
