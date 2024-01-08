// Events- The change in state of an object is called an event. eg- mouse events, keyboard events, submit form etc are events

let btn1=document.querySelector('#btn1');
let btn2=document.querySelector("#btn2");

// btn1.onclick=(e)=>{
//     console.log("btn1 was clicked");
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
// }

btn1.addEventListener("click",()=>{
    console.log("btn1 was clicked");
});

btn1.addEventListener("click",()=>{
    console.log("btn1 was clicked- handler clicked-1");
});

btn1.addEventListener("click",()=>{
    console.log("btn1 was clicked- handler clicked-2");
});

const handler3=()=>{
    console.log("btn1 was clicked- handler clicked-3");
};

btn1.addEventListener("click",handler3);

btn1.addEventListener("click",()=>{
    console.log("btn1 was clicked- handler clicked-4");
});

btn1.removeEventListener("click",handler3);