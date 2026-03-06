//DOM stands for document object model

//window is the global object in a browser's Javascript environment.

//everything lives under or inside the window


//All global JavaScript code executes within the window context. 
window.console.log(window);//inside window lives the DOM or the document

console.log(window.document); //see in the browser console, u will see the whole code what u have written in html

console.log(document.title); //u will see be able to see the title of the html file

//we can also change or "manipulate" these things like title of the document through javascript:

document.title = "title changed";
console.log(document.title);

console.log(document.body);

/* Some famous ways to interact with the DOM: alert, prompt. */

//uncomment these to see how it works

//alert("Hello");
//const name=prompt("Enter your name");
//confirm("Are you sure your name is:"+name+" ?");
