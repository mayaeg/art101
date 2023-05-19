// index.js - purpose and description here
// Author: Your Name
// Date:


<h1 id="hello-world">
  Hello World!
</h1>
<button id="my-button">
Press?
</button>

var buttonEl = document.getElementById("my-button");

buttonEl.addEventListener("click", function(){
  console.log("Button pressed");
var name = prompt("What is your name?");
var nameStr = "Hello, " + name;
var helloEl = document.getElementById("hello-world");
helloEl.innerHTML = nameStr;
})

var buttonEl = document.createElement("button");

buttonEl.innerHTML = "Press Me!"

buttonEl.setAttribute('id', 'my-button');
