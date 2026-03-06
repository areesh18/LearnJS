//Javascript is a loosely typed language-> data types are assigned dynamically.
/* Naming conventions:
    variableName✅MOST PREFERRED->CamelCase
    VariableName✅
    variable_name✅
    variable1_name✅
    variable2_name✅
    1variable->NOT ALLOWED❌
    #variablename->NOT ALLOWED❌
*/
// There are three things we have to understand: "var", "let" & "const"

/* -------------------------------------VAR---------------------------------------------- */

//var
// SCOPE:Global-> accessible from anywhere
//VALUES:Can be re-assigned means value can be changed
if(true){
    var age=18;
    console.log(age);
}
console.log(age);//the value of age will be printed even though its decalerd and assigned inside the if block.

/* ------------------------------------LET--------------------------------------------------- */


//let:same as var but locally scoped
//SCOPE:local->only accessible inside the block where its declared
//VALUES:Can be reassigned
if(true){
    let name="Areesh";
    console.log(name);
}
console.log(name);//this will not be printed because name variable is decalred using let inside the if block.


/* -------------------------------------CONST---------------------------------------------------- */


//const
//SCROPE: locally scoped->only accessible inside its block.
//VALUES: cant be reassigned
const myAge=23;
myAge=65;//this gives an error: "script.js:31 Uncaught TypeError: Assignment to constant variable."
console.log(myAge);
//also, we have to strictly initialize a const variable  with a value.
//for eg: One cant just write const abcd; it will give error, therefore we have to write const abcd="random" or whatever.from(selector, {duration: 1, fromVars}) 