let div=document.querySelector("div");

let newBtn=document.createElement("button");
newBtn.innerText='Click me';

// div.append(newBtn);   // to append at last of div
// div.prepend(newBtn);   // to append at first of div
// div.before(newBtn);   // to append before div
// div.after(newBtn);   // to append after div

// to delete element
let p=document.querySelector("p");
p.remove();