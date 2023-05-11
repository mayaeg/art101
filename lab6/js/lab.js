// index.js - purpose and description here
// Author: Maya Garcia
// Date: 5-01-23

//Define Variables
var myTransport = ["Civic", "walking", "bus"]

//Create object for my main ride
var myMainRide = {
  make: "Honda",
  model: "Civic",
  color: "Silver",
  year: 2008,
  age: function() {
      return 2023 - this.year;
  }
}

//output
document.writeln("Getting around: " + myTransport + "<br>")
document.writeln("My Main Ride: "<pre>")
,JSON.stringify(myMainRide, null, '\t'), "</pre>");

