const docCanvas = document.getElementById("canvasArc");
const myContext = docCanvas.getContext("2d");

let xCoord = docCanvas.width / 2;
let yCoord = docCanvas.height / 2;

let rad = 70;

let startAngle = 0;
let endAngle = 2 * Math.PI;

myContext.beginPath();
myContext.arc(xCoord, yCoord, rad, startAngle, endAngle, false);
myContext.lineWidth = 8;
myContext.strokeStyle = "#00b0f0";
myContext.stroke();
