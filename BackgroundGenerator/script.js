var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var colorBtn1 = document.querySelector(".randomColor1");
var colorBtn2 = document.querySelector(".randomColor2");
var wrapper = document.getElementById("wrapper");
var massage = document.querySelector(".massage");

css.textContent = `linear-gradient(to right, ${color1.value}, ${color2.value})`;

function colorChoose() {
	wrapper.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
	css.textContent = wrapper.style.background;
}
function randomColor() {
	let randomNum = [];
	for (let i = 0; i < 3; i++) {
		let x = Math.floor(Math.random() * 1000) % 255;
		num = x.toString(16);
		if (num.length === 1) num = "0" + num;
		randomNum.push(num);
	}

	this.parentNode.children[0].value = `#${randomNum.join("")}`;
	colorChoose();
}
color1.addEventListener("input", colorChoose);
color2.addEventListener("input", colorChoose);
colorBtn1.addEventListener("click", randomColor);
colorBtn2.addEventListener("click", randomColor);
css.addEventListener("click", function () {
	navigator.clipboard.writeText(`${wrapper.style.background}`).then(
		function () {
			console.log("Async: Copying to clipboard was successful!");
			massage.classList.toggle("animate");
			var timeoutID = setTimeout(function () {
				massage.classList.toggle("animate");
			}, 1500);
		},
		function (err) {
			console.error("Async: Could not copy text: ", err);
		}
	);
});

// deg
var btn = document.querySelector(".btn");
var box = document.querySelector(".circle");

var [windowW, windowH] = [window.innerWidth, window.innerHeight];
var [halfW, halfH] = [windowW / 2, windowH / 2];
var startX = halfW,
	startY = halfH,
	isCapture;

const Screen2Cartesian = ({ x, y }) => ({
	x: x - halfW,
	y: halfH - y,
});

btn.onpointerdown = onStart;

function onResize() {
	[windowW, windowH] = [window.innerWidth, window.innerHeight];
	[halfW, halfH] = [windowW / 2, windowH / 2];
}

window.onresize = onResize;

function onStart(e) {
	isCapture = true;
	document.addEventListener("pointermove", onMove);
	document.addEventListener("pointerup", onEnd);
}

function onEnd(e) {
	isCapture = false;
	startX = startY = null;
	document.removeEventListener("pointermove", onMove);
	document.removeEventListener("pointerup", onEnd);
}

function onMove(e) {
	if (!isCapture) return;
	var [x, y] = [e.clientX, e.clientY];
	computePosition(x, y);
}

function computePosition(x, y) {
	var { x: cartX, y: cartY } = Screen2Cartesian({ x, y });
	var atan2 = Math.atan2(cartY, cartX);
	// console.log(atan2);
	box.style.transform = `rotate(${-1 * atan2}rad)`;
	wrapper.style.background = `linear-gradient(${-1 * atan2 + 1.5}rad, ${color1.value}, ${color2.value})`;
	css.textContent = wrapper.style.background;
}

computePosition(startX, startY);
