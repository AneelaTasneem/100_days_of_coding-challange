// define a type of alias for a circle:
type shape={
kind: "circle"|"rectangle"    // property to identify the shapes:
radius?: number ,              // Property unique to a circle
height?: number,              // property unique to a rectangle:
width?: number                // property unique to a rectangle:
};

// Describing circle using type shape:
let circle: shape= {
kind: "circle",
radius:3
}

// Describing rectangle using type shape:
let rectangle: shape={
kind : "rectangle",
height: 5,
width: 10
}

// description printing:
console.log(circle);
console.log(rectangle);
