// function with rest parameters:
// Defines a function that accepts multiple hobbies as arguments:

function logHobbies(...hobbies: string[]) {
  hobbies.forEach((hobby) => {
    console.log(`I enjoy ${hobby}! `);
  });
}

// list of logHobbies:

logHobbies("Reading", "sewing", "painting");
