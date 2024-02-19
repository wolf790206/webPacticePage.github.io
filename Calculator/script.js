var pastEnter = [];
var nowEnter = [];
var pastPrint = document.querySelector(".past");
var nowPrint = document.querySelector(".now");
var btn = document.getElementById("btnGroup");
btn.addEventListener("click", getBtn);

function getBtn(event) {
	let getValue = event.target.attributes.value.value;
	let getTarget = event.target.innerHTML;
	doSomething(getValue, getTarget);
}

function doSomething(value, target) {
	if (isNumber(value)) {
		nowEnter.push(value);
		nowPrintFn(value, target);
	} else if (value === ".") {
		if (!haveDot(nowPrint.innerHTML)) {
			nowEnter.push(value);
			nowPrintFn(value);
		}
	} else if (value === "equals") {
		pastPrintFn(value, target);
	} else {
		pastPrintFn(value, target);
		nowPrintFn(value, target);
	}
}
function pastPrintFn(value, target) {
	if (value === "equals") {
		if (pastEnter.length >= 3) {
			pastEnter.push(toNumber(nowPrint.innerHTML));
			let reslut = solve(pastEnter);
			pastEnter.push(reslut);
			pastPrint.innerHTML = pastEnter.join("");
		} else if (pastEnter.length === 2) {
			pastEnter[pastEnter.length - 1] = target;
			nowEnter = [];
			pastEnter.push(pastEnter[0]);
			pastPrint.innerHTML = pastEnter.join("");
		}
	} else if (isNumber(nowPrint.innerHTML)) {
		pastEnter.push(toNumber(nowPrint.innerHTML));
		nowEnter = [];
		pastEnter.push(target);
		pastPrint.innerHTML = pastEnter.join("");
	} else {
		if (pastEnter[pastEnter.length - 1] !== target) {
			pastEnter[pastEnter.length - 1] = target;
			nowEnter = [];
			pastPrint.innerHTML = pastEnter.join("");
		}
	}
}
function nowPrintFn(value, target) {
	if (isNumber(value)) {
		nowPrint.innerHTML = nowEnter.join("");
	} else if (value === ".") {
		nowPrint.innerHTML = nowEnter.join("");
	} else {
		nowPrint.innerHTML = target;
	}
}

function toNumber(value) {
	return parseFloat(value).toString();
}

// 判斷執行
function haveDot(value) {
	let num = value.split("");
	return num.some((e) => e === ".");
}
function isNumber(value) {
	return parseFloat(value).toString() !== "NaN";
}

function plus(a, b) {
	return a + b;
}
function minus(a, b) {
	return a - b;
}
function multipy(a, b) {
	return a * b;
}
function divid(a, b) {
	return a / b;
}
function squareRoot(a) {
	return Math.sqrt(a);
}

function solve(data) {}
