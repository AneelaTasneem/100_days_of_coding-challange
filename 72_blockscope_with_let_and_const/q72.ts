//Question 72: Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const. Show how variables declared inside the block are not accessible outside of it.

{
  let blockLetVisibility = "Inside block only";
  console.log(blockLetVisibility); // works properly

  const blockConstVisibility = "Inside Block only";
  console.log(blockConstVisibility); // works properly
}

console.log(blockLetVisibility); //not accesable outside of blockand shows error:

console.log(blockConstVisibility); //not accesable outside of block and shows error:

// This shows that `let` and `const` keep variables safe inside the block where they're defined.