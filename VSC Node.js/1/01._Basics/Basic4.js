console.log("-------------------- Arrays --------------------");
// --------------------------------------
// Arrays, for loops
// --------------------------------------
// Exercise 1 - Array Positioning

const letters = ["a","b","c"];
// show b in the console 

console.log("\n----------Exercise 1----------");
console.log(letters[1]);


// --------------------------------------
// Exercise 2 - Array Positioning

const friends = [];

// What a lonely array. Add at least 3 friend objects to it.  

console.log("\n----------Exercise 2----------");
friends.push("Artur", "Marian", "Gniewomir");
console.log(friends);
/* {} for erach objekt */

// --------------------------------------
// Exercise 3 - Get the index of first occurance of that value. 

const significantMathNumbers = [0, 2.718, 3.14159, 1729];

// You want to programmatically find where the number 1729 is in the array.
// programmatically means that no finger counting allowed. There is a method for this (finding index based of value). 

console.log("\n----------Exercise 3----------");
console.log(significantMathNumbers.indexOf(1729));

// --------------------------------------
// Exercise 4 - Inserting elements

const diet = ["tomato", "cucumber", "rocket"];

// You are a programmer. In one line (one statement) insert hamburger, soda and pizza between the elements cucumber and rocket

console.log("\n----------Exercise 4----------");
console.log(diet);
diet.splice(2, 0, "hamburger", "soda", "pizza");
console.log(diet);

// --------------------------------------
// Exercise 5 - Remove element

// Remove the LAST element of the array.
// Don't remove by index. You know in advance that it's the last in the array because you are too full already. 

console.log("\n----------Exercise 5----------");
diet.pop();
console.log(diet);

// --------------------------------------
// Exercise 6 - Copy array

// You really like your daily diet from last exercise. Copy it to a new array called dinnerTray so you can give it to a friend.  

console.log("\n----------Exercise 6----------");
const dinnerTray = diet.slice();
/* const dinnerTray = [...diet]; */
dinnerTray.push("test");
console.log("Old array: " + diet);
console.log("New array: " + dinnerTray);

// --------------------------------------
// Exercise 7 - For loop

const lettersExpanded = ["a","b","c", "d", "e", "f", "g", "h"];

// log every second char in the array starting from b

console.log("\n----------Exercise 7----------");
let text = "";
for (let i = 0; i < lettersExpanded.length; i+=2) {
  text += lettersExpanded[i] + " ";
}
console.log(text);

// --------------------------------------
// Exercise 8 - For loop and if statement

const numbers  = [5, 3, 2, 7, 11, 12, 0, -20, 6];

const discardedNumbers = [];

// log the element if the number is above 6 or below 0
// else push them to the array discardedNumbers

console.log("\n----------Exercise 8----------");
console.log("Between 6 and 0: ");
let num = "";
let j;
for (j = 0; j < numbers.length; j++){
    if(numbers[j] >= 7 || numbers[j] <= -1){
            num += numbers[j] + " ";
            discardedNumbers.push(numbers[j]);
    }else if(numbers[j] <= 6 || numbers[j] >= 0){
        console.log(numbers[j] + " ");
    }
}
console.log("Discarded:                 " + discardedNumbers);


/* Examples */
/* numbers.forEach((element) => {​​

  element < 0 || element > 6
  
  ? console.log(element)
  
  : discardedNumbers.push(element)
  
  }​​) */



// --------------------------------------