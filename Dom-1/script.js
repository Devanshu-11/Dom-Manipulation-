// Window Object-It is an open window in a browser. It is a browser object and is automatically created by browser. It is a global objects with lots of property and methods. console.log(),alert() comes under the window object

// DOM-Document Object Model- Javascript interacts with an HTML document thorugh an object called document which represents DOM created by browser based on HTML code. DOM is a tree link structure in which window is the root which represents the top most level, then document, then HTML code and so on and each individual called the node

// Selecting by id 
let button=document.getElementById("myId");
// if it is not present, it gives NULL

// Selecting by class 
let headings=document.getElementsByClassName("myClass");
// if it is not present, it gives us empty array

// Selecting by tag name
let paras=document.getElementsByTagName("p");

// Query Selector- It returns the node list

// It returns only the first element
let firstElements=document.querySelector(".myClass");

// It returns only the All element
let allElements=document.querySelectorAll(".myClass");

// In order to find the element by Id
let buttonElement=document.querySelector("#myId");

// tagName- returns tags for element node
button.tagName;   // it returns button as button is the variable name associated with button

// innerText- returns the text content of element and all its children
let div=document.querySelector("div");
div.innerText;
// it returns mango/norange/nlitchi. It only contains text

// innerHTML- returns the plain text or html content in HTML
// let div=document.querySelector("div");
div.innerHTML;
// it also contains names along with their tags

let myNewHeading=document.querySelector("h1");
// In order to change the name
myNewHeading.innerText="abcd";

// In order to change the tags with italic
myNewHeading.innerHTML="<i>new Heading</i>"

// textContent- returns the textual content for hidden elements
let myOldHeadings=document.querySelector("h4");
myOldHeadings.textContent;