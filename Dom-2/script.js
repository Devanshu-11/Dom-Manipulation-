const div=document.querySelector("div");
let p=document.querySelector("p");

// get attribute method
let id=div.getAttribute("id");
console.log(id);

let name=div.getAttribute("name");
console.log(name);

let className=p.getAttribute("class");
console.log(className);

// to set the attribute value
console.log(p.setAttribute("class","newClass"));

// to get the style
div.style.backgroundColor="green";