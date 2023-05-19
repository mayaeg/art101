// index.js - purpose and description here
// Author: Maya Garcia
// Date: 5-18-23



//Create an input form field <input type="text"  id="input"> and label it "Please enter your name for sorting"
<div class="input-output">
    "Please enter your name for sorting: "
<input type="text" id="input">
    </input>

<button id="button">Submit</button>
</div>
function sortingHat(str) {
    len = str.length;
    mod = len % 4;
    if (mod == 0) {
      return "Gryffindor"
    }
    else if (mod == 1) {
      return "Ravenclaw"
    }
    else if (mod == 2) {
      return "Slytherin"
    }
    else if (mod == 3) {
      return "Hufflepuff"
    }
}
var myButton = document.getElementById("button");
myButton.addEventListener("click",function() {
    var name = document.getElementById ("input").value;
    var house = sortingHat (name);
newText= "<p> The Sorting Hat has sorted you into " + house + "</p>";
document.getElementById("output").innerHTML = newText;
})