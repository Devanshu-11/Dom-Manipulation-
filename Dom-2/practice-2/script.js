let newBtn=document.createElement("button");
newBtn.innerText="Click me";

newBtn.style.color="white";
newBtn.style.backgroundColor="red";

document.querySelector("body").prepend(newBtn);



let para=document.querySelector("p");
para.classList.add("newClass");