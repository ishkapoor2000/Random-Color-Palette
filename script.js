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

const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;

function addColor() {
	randomColorBlock.forEach(e => {
		var newColor = randomHex();
		e.style.backgroundColor = newColor;
		e.children[0].innerHTML = newColor;
		e.onclick = () => {
			document.getElementById("colorInput").setAttribute("value", newColor);
			document.getElementById("colorInput").select();
			document.execCommand("copy");
			// navigator.clipboard
			// 	.writeText(newColor)
			// 	.then(
			// 		success => console.log("text copied"),
			// 		err => console.log("error copying text")
			// 	);
		}
	})
}