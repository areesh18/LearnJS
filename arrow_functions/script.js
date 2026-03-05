//Arrow functions

//Syntax:

//simple function:
/* function add(a, b) {
  return a + b;
} */
//how to write the same using arrow functions:
/* const add = (a, b) => {
  return a + b;
};
console.log(add(2, 6)); */

/* One liner approach : used when we have only a single line of reyurn statement as in above */
const add = (a, b) => a + b; //notice how we didnt write {} and 'return'
console.log(add(6, 5));

/* ----------arguments------------ */
//there are no "arguments" accessing in arrow functions as we did in the previous functions exercise:
/* function addMultipleNumbers() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
} */

/* const addMultipleNumbers = () => {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
};
addMultipleNumbers(2, 6, 5, 8); */ //u will see an error: "arguments is not defined" in the brpwser console

//so how do we access all the arguments? using the rest operator (the 2nd pethod of the previous functions exerceise)

const addMultipleNumbersArrowfunc = (...nums) => {
  console.log(nums);
};
addMultipleNumbersArrowfunc(5, 6, 4, 8); //u will see an object in the console.

/* ---------------Hoisting-------------- */
//Normal functions allows hoisting.
//What is hoisting?
/* When u call a function before declaring it , javascript runs it normally, this is called hoisting as shown below */

sayHello("Areesh");

function sayHello(a) {
  console.log("Hello" + " " + a);
}

//but arrow functions doesnt allow hoisting
/* sayHi("Areesh");//this will give an error showing " Cannot access 'sayHi' before initialization"
const sayHi=(a)=>{
    console.log("Hi"+" "+a);
} */

const sayHi2 = (a) => {
  console.log("Hi" + " " + a);
};
sayHi2("Areesh"); //this will work

//This keyword

/* this keyword points to the object itself in normal functions */
const obj = {
  age: 23,
  name: "Areesh",
  myFunction: function () {
    console.log(this);
    console.log(this.name);
    console.log(this.age);
  },
};
obj.myFunction();

/* but the this keyword points to the window object when used inside an arrow function ()=>{} */

const obj2 = {
  age: 23,
  name: "Zafar",
  myFunction2: () => {
    console.log(this);
  },
};
obj2.myFunction2();//prints the window object in the browser console
