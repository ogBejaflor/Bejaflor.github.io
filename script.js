// Get the bubble element by its ID
var bubble = document.getElementById("bubble");

// Set the initial position of the bubble
bubble.style.top = "50%";
bubble.style.left = "50%";

// Generate a random size for the bubble (between 50 and 200 pixels)
var size = Math.floor(Math.random() * 151) + 50;
bubble.style.width = size + "px";
bubble.style.height = size + "px";

// Generate a random color for the bubble
var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
bubble.style.backgroundColor = randomColor;
