console.log("-------------------- Objects --------------------");
// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

const myObj = {"message": "Hello, earthling! I bring peace."};

// Log the message 
console.log("\n----------Exercise 1----------");
console.log(myObj.message);

// --------------------------------------
// Exercise 2 - Defining an object. 

// Create an object that has your name and age. 
const name_age = {"Name": "Artur", "Age": "27"}

console.log("\n----------Exercise 2----------");
console.log(name_age);

// --------------------------------------
// Exercise 3 - Add a property 

console.log("\n----------Exercise 3----------");
const stackOverflow = {};
stackOverflow.isAllowed = true

// make a rule called isAllowed and let the value be true


console.log(stackOverflow);

// --------------------------------------
// Exercise 4 - Remove a property 
console.log("\n----------Exercise 4----------");
const thisSong = {"description": "The best song in the world."}

// remove the property "description" and add a property called "about" that should say "Just a tribute."

console.log(thisSong);
delete thisSong.description;
console.log(thisSong);
thisSong.about = "Just a tribute";
console.log(thisSong);

// --------------------------------------