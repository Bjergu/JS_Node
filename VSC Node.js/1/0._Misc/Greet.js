//hoisting
//functions are hoisted
const returnValue = myFirstFunction();
console.log(returnValue);

function myFirstFunction(){
    return "Greetings";
}
//variables are not hoisted(must be called after scope)
const myVariableFunction = function(){

    console.log("Hello from the anonymous function");
};

myVariableFunction();

const myArrowFunction = () => {

    console.log("Hello from the anonymous function which is also an arrow funtion");
};

myArrowFunction();

//------------------ callback functions ------------------
function sayHiLater(anyFunctionReference){

    anyFunctionReference();
}

const sayHi = () => {
    console.log("Hi");
}

const saySomething = () => {
    console.log("Something");
};

sayHiLater(sayHi);
sayHiLater(saySomething);

//----------------- poke -------------------
function interact(genericInteraction, name) {
    console.log(genericInteraction(name));
}

const poke = (name) => {
    return "poke: " + name;
}

interact(poke, "Bob");


interact((name) => "Lick => " + name, "My body");