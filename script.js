for (let i = 1; i <= 100; i++) {
	const box = document.createElement("div");
	const text = document.createElement("p");
	box.classList.add("box");
	document.querySelector(".container").appendChild(box);
	box.appendChild(text);
	text.innerText = "Click Generate";
}

const btn = document.querySelector(".btn");
const randomColorBlock = document.querySelectorAll(".box");

function randomHexColorCode() {
	var chars = "0123456789abcef";
	var colorLength = 6;
	var color = "";

	for (var i = 0; i < colorLength; i++) {
		var randomColor = Math.floor(Math.random() * chars.length);
		color += chars.substring(randomColor, randomColor + 1);
	}

	return "#" + color;

}

function addColor() {
	randomColorBlock.forEach(e => {
		var newColor = randomHexColorCode();
		e.style.backgroundColor = newColor;
		e.children[0].innerHTML = newColor;
		e.onclick = () => {
			document.getElementById("colorInput").setAttribute("value", newColor);
			document.getElementById("colorInput").select();
			document.execCommand("copy");
		}
	})
}