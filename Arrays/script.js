//Arrays in javascript are a little different from typical arrays in C or java
//In javascript , arrays can be heterogenous-> elemtns of different data types can be stored, numbers , stirngs booleans, etc.

const myArray = [1, "Areesh", true, 4.6];
console.log(myArray);
console.log(myArray.length); //length of the array
console.log("First element of the array:" + myArray[0]); //first element of the array
console.log("second element of the array:" + myArray[1]); //first element of the array
console.log("last element of the array:" + myArray[myArray.length - 1]); //last element of the array

//Arrays are mutable, means we can change or reassign the inner contents of the array as shown below
myArray[1] = "Zafar";
console.log(myArray); //now the 2nd element of the array has been changed from "Areesh" to "zafar"

//We can add elements at the end of an array by using push method

myArray.push("new element");
console.log(myArray);

//we can remove the last element using pop() method
myArray.pop();
console.log(myArray);

//Adding elements from the front
myArray.unshift("New first element");
console.log(myArray);

//removing the first element
myArray.shift();
console.log(myArray);

//how to iterate an array:
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
} //but we rarely use for loops to iterate in modernJS, instead we use higher order functions : .map(), .filter(), .reduce(), which we will cover in the next lesson.
