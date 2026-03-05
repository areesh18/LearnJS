//we will be making an addition function for multiple numbers

function add(a, b) {
  //a and b are called parameters
  console.log(a + b);
}
add(2, 5); //calling the function add and passing the ARGUMENTTS 2 and 5

//multiplication function to multiply 3 numbers
function multiply3numbers(a, b, c) {
  console.log(a * b * c);
}
multiply3numbers(2, 6, 4); //prints 48 in the console as 2*6*4=48, here 2, 6 and 4 are the arguments to the function multiply3numbers.

/* we can reuse the function any where like below */
add(7, 6);
multiply3numbers(5, 1, 2);
add(6, 10);

/* NOTE: its not a good practice to console log inside the function itself , so we will return the result inside the function and store it in a variable as shown below: */

function add4numbers(a, b, c, d) {
  return a + b + c + d;
}
let result = add4numbers(4, 6, 8, 9);
console.log("The result is:" + result);

/* Now suppose we have to make a dynamic function which can add any number of numbers, we do it using two methods:
    1.by accessiung arguments.length
    2.rest operator
*/

/* --------------arguments--------------------- */

function addMultipleNumbers() {
  console.log(arguments);
}
addMultipleNumbers(5, 6, 7, 8, 9, 10);
//if you see the browser console , there will be an Arguments object logged with all the arguments shown along with the length property which denotes the number of arguments, we will access the length propert by "arguments.length" and use it in a for loop as shown below:

function addMultipleNumbers() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
result = addMultipleNumbers(5, 6, 7, 8, 9, 10); //returns 45
console.log(result); //prints the result 45

/* ----------------rest operator----------- */
function addMultipleNumbersV2(...anyname) {
  let ans = 0;
  for (let i = 0; i < anyname.length; i++) {
    ans = ans + anyname[i];
  }
  return ans;
}
console.log("The ans is :"+addMultipleNumbersV2(4, 6, 7, 8, 9));
