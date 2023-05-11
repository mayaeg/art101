// index.js - purpose and description here
// Author: Maya Garcia
// Date: 5-04-23

//shuffleArray shuffles what is in the array
function shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
//now for string!
function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}


//sortUserName is a function that sorts the letters the user inputs
function sortUserName(userName) {
    return userName.toLowerCase().split("").sort().join("");
}

//makeNameRandom is a function that sorts the letters the user input randomly
function makeNameRandom(userName) {
//change userName string into array
var nameArray = userName.toLowerCase().split("");
console.log("nameArray =", nameArray);
//use shuffleArray function to shuffle the array
var shuffledArray = shuffleArray(nameArray);
console.log("shuffledArray =", shuffledArray);
var shuffledString = shuffledArray.join("");
//shift to title case
var newName = toTitleCase(shuffledString);
//return array to string
return newName;
}

//Base of function
function main() {
var userName = window.prompt("What is your name?");
document.writeln("<style>:root {--textlen: " + userName.length + ";}</style>");
var sortedUserName = sortUserName(userName);
document.writeln("Here is your sorted name!" + sortedUserName + "</br></br>");
var randomName = randomizeUserName(userName);
document.writeln("Here is your name all fixed up!");
document.writeln("<div class='name'>" + randomName + "</div>")
}

//calling base function
main();