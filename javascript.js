const box1 = document.querySelector("#box1");
const box2 = document.querySelector("#box2");
const box3 = document.querySelector("#box3");
const box4 = document.querySelector("#box4");
const box5 = document.querySelector("#box5");
const message = document.querySelector("#message");

function changeMessage1() {message.textContent = "You touched my boxes!";}
function changeMessage2() {message.textContent = "Stop touching my boxes!";}
function changeMessage3() {message.textContent = "These are my boxes!!!";}
function changeMessage4() {message.textContent = "I dare you to touch my boxes again.";}
function changeMessage5() {message.textContent = "Why are you touching my boxes?";}

box1.addEventListener("click", changeMessage1);
box2.addEventListener("click", changeMessage2);
box3.addEventListener("click", changeMessage3);
box4.addEventListener("click", changeMessage4);
box5.addEventListener("click", changeMessage5);