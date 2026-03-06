//For loop- if we exctly know how many times to loop exactly
for (let i = 1; i <= 10; i = i + 1) {
  console.log("Areesh"); //This "Areesh" will be logged 10 times now
}

//while loop- if we dont know the number of times to loop but know a condition to fulfill, then we use while loop
/* suppose you are at a place far from your house and you have to reach your house which is located at 100th position, and you have to count the number of steps it took to reach your house */
let initialPosition = 0;
let housePosition = 100;
while (initialPosition != housePosition) {
  initialPosition = initialPosition + 1;
  console.log("Steps taken:" + initialPosition);
}
/* if you change the hosueposition value, the number of steps also changes */

//DO WHILE LOOP-> it is similar to while loop, the only difference is that it first runs the loop and then checks the condition
//lets take the famous example of the game: Guess the number
let numberToBeGuessed = 97;
let guess = 0;
do {
  guess = prompt("Guess a number:"); //this is stored as a string so we will convert into integer by using parseInt
  guess = parseInt(guess);
  if (guess == numberToBeGuessed) {
    alert("Winner");
    break;
  }
} while (guess != numberToBeGuessed); //the above loop will run until the user inputs 97(the number to be guessed)
