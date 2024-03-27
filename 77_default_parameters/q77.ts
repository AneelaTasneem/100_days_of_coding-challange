//Question 77: Default Parameters: Write a function that greets a user. It should take the user's name as a parameter and say hello. If no name is given, it should greet an anonymous user.


// This function greets a user by name, or greets an anonymous user if no name is provided
function greetUser(userName: string = "anonymous") {
  // Says hello to the given name or to an anonymous user
  console.log(`Hello ${userName}!`);
}
// Trying the function with a name and without
greetUser("Aneela"); // output Hello Aneela!
greetUser(); // output Hello Anonymous!
