const colors = [
	"green",
	"blue",
	"pink",
	"red",
	"orange",
	"yellow",
	"purple",
	"black",
	"white",
	"grey",
	"teal",
	"aqua",
	"blueviolet",
	"brown",
	"coral",

	"crimson",
	"darkblue",
	"darkgrey",
	"darkmagenta",
	"darkorange",
	"darkgreen",
	"tomato",
	"tan",
	"thistle",
	"turquoise",
	"aliceblue",

	"aqua",
	"cyan",
	"darkcyan",
	"salmon",
	"darksalmon",
	"darkorchid",
	"darkturquoise",
	"lightgreen",
	"lightgrey",
	"lightpink",
	"lightsalmon",
	"lightgreen",
	"lightblue",
	"lightbrown",
	"lightorange",
	"lavender",
	"magenta",
	"maroon",
	"mistyrose",
	"orangered",
	"plum",
	"powderblue",
];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
	const randomNumber = getRandomNumber();
	document.body.style.backgroundColor = colors[randomNumber];
	color.textColor = colors[randomNumber];
	color.textContent = colors[randomNumber];
});
function getRandomNumber() {
	return Math.floor(Math.random() * colors.length);
}
