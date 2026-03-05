const studentsArray = ["areesh", "rahul", "ashwin", "john", "rutherford"];
//foreach=> performs a specific action on each element of the array
//we can use it to loop over the array instead of using for loop.
studentsArray.forEach((val) => console.log(val));

//.map()-> returns a new array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const newArray = numbers.map((num) => {
  return num * 2;
});
console.log(newArray);
console.log(numbers); //note that the numbers array is unchanged.

//.find()->returns a single value
//suppose we have to find the first number which is greater than 10 in an array
const numbers2 = [1, 2, 3, 4, 5, 8, 7, 6, 9, 8, 10, 11, 2, 15];
const found = numbers2.find((num) => num > 10);
console.log(found); //returns 11

//includes()-> checks if an element is included or not in an array

const checkIncludes = numbers2.includes(77); //returns false
console.log(checkIncludes);
console.log(numbers2.includes(3)); //true

//.filter()

const evenArray = numbers2.filter((num) => num % 2 == 0);
console.log(evenArray); //returns an array with only even elements from the numbers2 array.

console.log(numbers2); //remains unchanged

//slice()->returns a part of the origianl array.
const slicedArray = numbers2.slice(1, 5);
console.log(slicedArray);
console.log(numbers2); //remains unchanged

console.log(numbers2.slice(5)); //returns the elemetns starting from 5th position till the last position.

//splice()->now this changes the original array , it deletes elemts from array and returns those deleted elements in a new array
console.log(numbers2);
const splicedArray = numbers2.splice(1, 5);

console.log(splicedArray);
console.log(numbers2); //notice that the elements from position 1 to 4 has been removed form the original array

//.reduce()->squashes an entire array into a single value(number, string, object , or even another array)

//lets say we have to sum the total price of the below prices array:
const prices = [100, 500, 620, 10, 230];
//now we can do this using foreach or forloop as follows:
let sum = 0;
prices.forEach((price) => {
  sum += price;
});
console.log(sum); //gives 1460

//but we can use reduce to do the same thing:

const totalPrice = prices.reduce((acc, price) => {
  //the first parameter inside the function is acc-> accumulator which is the final value we are calculating and the price is each item in the prices array.
  return acc + price;
}, 0); //the intial value of acc is set to 0
console.log(totalPrice);

//another example, suppose we have to find the max value in an array

const maxPrice = prices.reduce((max, current) => {
  return current > max ? current : max;
}, prices[0]);//the initial value of max is set to prices[0]
console.log(maxPrice); //620(max in the prices array)

/* suppose we have to return an array of object-> employees with their salary and we want a new array having only those emplyees with salary>10000  */
const empData = [
  { name: "Areesh", salary: 2000 },
  { name: "Zafar", salary: 11000 },
  { name: "John", salary: 1000 },
  { name: "Rahul", salary: 17000 },
  { name: "Karan", salary: 28000 },
  { name: "Sam", salary: 7000 },
];
const resultArray = empData.reduce((acc, emp) => {
  if (emp.salary > 10000) {
    acc.push(emp.name);
  }
  return acc;
}, []);//acc starting with empty array[]
console.log(resultArray);// ['Zafar', 'Rahul', 'Karan']

