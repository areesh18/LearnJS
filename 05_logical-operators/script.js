/* Suppose we have to check if a person is a male and above 25 years of age and return true or false*/

let gender="male";
let age=26;

//Using AND operator

if(gender=="male" && age>25){
    console.log(true);
}else{
    console.log("false");
}
/* The above code returns true as both the conditions satisfy, but what if we keep the gender as it is but change the age to 23, now it will return false, because AND requires all the conditions to be true */

//OR operator requires any one condition to be true
if(gender=="female" || age>25){
    console.log(true);
}else{
    console.log("false");
}
/* in the above code, u notice the gender=="female" condition is false yet the if code returns true. so the OR operator required atleast any one condition to be true. */

//NOT operator -> just reverse the condition

console.log(!true);//prints false

