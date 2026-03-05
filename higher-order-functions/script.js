//A Higher order function is just a function that does at least one of the following:
/* 
    1. Takes a function as an argument
    2. return a function as its result.
 */

/* ---------------------------------------------Taking a function as an argument--------------------------------------- */
// A simple "Worker" function or the callback function

function add(a, b) {
  return a + b;
}

// The Higher-Order Function (The "Manager")
// It takes a function ('task') and values to use with it
function logResult(task, x, y) {
  console.log("Starting the calculation...");
  const result = task(x, y); // Running the passed-in function
  console.log("The result is: " + result);
  return result;
}

// Using it:
logResult(add, 5, 10);
//since add function is passed as an argument in the HOF logResult -> its a callback function.
//so to remeber-> the inside function or the function which is passed into another funtion is called the callback function.

/* ----------------------------------returning a function------------------------------------------*/

function createGreeter(greeting) {
  //It returns a brand new function customised with the greeting
  return function (name) {
    return greeting + "," + name + "!";
  };
}
// Generate two different tools from one HOF
const sayHello = createGreeter("Hello");
const sayBye = createGreeter("Bye");

console.log(sayHello("Areesh"));
console.log(sayBye("Zafar"));
