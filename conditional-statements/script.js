//if else in javascript is like in any other language like java or C

//lets say we have to check a condition, if the salary of a person is above $10000, then he is rich, if its between 5k to 10k, then he's middle class, if its below 5k , then he is poor.

const salary = 6000; //Change this value according to the ranges to see what gets printed in the browser console.
if (salary > 10000) {
  console.log("rich");
} else if (salary > 5000 && salary <= 10000) {
  console.log("middle class");
} else {
  console.log("poor");
}

//short form: ternary operator
//if we have exactly two conditions, we can use ternary operator instead of if else

salary > 10000 ? console.log("rich") : console.log("not rich");

/* -----------------------------------------Swicth case-------------------------------------------------------  */

const option = 1;
switch (option) {
  case 1: {
    console.log("Hello 1");
  }
  case 2: {
    console.log("Hello 2");
  }
  case 3: {
    console.log("Hello 3");
  }
}
/* in the above switch case code, there is a bug, in the console, you will notice that all the three cases run even though the option variable is set to 1, but all the three cases are running instead of only the first case:
This is because when a case matches the switch, all the cases below it run by default, to avoid this we use break statement as shown in the code below.
*/

switch (option) {
  case 1: {
    console.log("Hello 1");
  }
  break;
  case 2: {
    console.log("Hello 2");
  }
  break;
  case 3: {
    console.log("Hello 3");
  }
  break;
  default:{
    console.log("invalid operation");
    
  }
}
/* Notice the default-> this case is to handle if the user inputs any other option instead of allowed ones. */
