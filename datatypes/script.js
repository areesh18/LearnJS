//Numbers
/* We just declare the values in numbers */
let num1 = 18;
let num2 = 12;
console.log(num1 + num2); //this prints 30

//Strings
/* Use double or single quotes to create/write strings */
let string1 = "Areesh";
let string2 = "Zafar";
console.log(string1 + string2); //this prints AreeshZafar

//what if we add a string and a number
console.log(2 + "22"); //this prints 222 , it converts the number 2 to string.
console.log(2 * "22"); //this prints 44 , here it converts the string 22 to number.

//we can also check the type of anything using the typeof operator.
console.log(typeof (2 + "22")); //222 (string)
console.log(typeof (2 * "22")); //44 (number)

//null
let anything = null;
console.log(anything);

//undefined
let userAge = undefined;
console.log(userAge);

//Object:stroe data in key value pairs
const personObject = {
  Name: "Areesh Zafar",
  Age: 23,
  Salary: 800000000000000000000000,
};
console.log(personObject); //check the browser console
console.log(typeof personObject); //check the browser console

//Boolean
let flag = true;
console.log(flag);
console.log(!flag); //we can reverse the value of a boolean variable by using !

//Fun fact: Javascript understands/recognises true as 1 and false as 0
//lets add true and 100
console.log(true + 100); //we get 101 which means the true is converted to 1
console.log(false + 100); //we get 100 which means the false  is converted to 0
