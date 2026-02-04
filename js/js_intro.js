//JavaScript Document to demonstrate the if else decision/selection construct

//Variable to hold the id of the container div
let container = document.getElementById("container");

//Create a div that will hold the contents of this JS document
let selectionDiv = document.createElement("div");
let age = 20, votinStatus = "";

// Assign voting status based on age
if (age >= 18)
    votingStatus = "You are ${age} years old, hence you can vote";
else
    votingStatus = "You are ${age} years old, hence you cannot vote";

//Add the voting status message to the selectionDiv
selectionDiv.innerHTML = votingStatus;

//Add the contents of the selectionDiv to the container div
container.appendChild(selectionDiv);