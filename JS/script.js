// string
const userEmail = "          hcudhcudhu@gmail.com";
const userEmail2 = "jijijiijij@gmail.com      ";
console.log(userEmail.trimStart());
console.log(userEmail2.trimEnd());

data = [
	{
		userName: "andrei",
		password: "supersecret",
	},
	{
		userName: "sally",
		password: "123",
	},
	{
		userName: "ingrid",
		password: "777",
	},
	{
		userName: "222y",
		password: "123",
	},
	{
		userName: "in333d",
		password: "777",
	},
];

function callRandom(range, num) {
	let listNum = [];
	for (let i = 0; i < range.length; i++) {
		listNum.push(i);
	}
	let result = [];
	for (let i = 0; i < num; i++) {
		let randomNum = Math.floor(Math.random() * Math.pow(10, Math.ceil(Math.log10(range.length)))) % listNum.length;

		result.push(range[listNum[randomNum]]);
		listNum.splice(randomNum, 1);
	}
	return result;
}

console.log(callRandom(data, 3));

const first = () => {
	const greet = "hi";
	const second = () => {
		const name = "bobby";
		alert(greet, name);
	};
	return second;
};

const newFunc = first();
newFunc();

// Currying
const multiply = (a, b) => a * b;
const curriedMutltiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMutltiply(5);
multiplyBy5(10);

// Compose
const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;
compose(sum, sum)(5);

// Avoiding Side Effects, functional purity
var a = 1;
function b() {
	a = 2;
}

// Advanced arrays
const array = [1, 2, 10, 16];
const double = [];
const newArray = array.forEach((num) => double.push(num * 2));
console.log(newArray);

// map, filter, reduce
const mapArray = array.map((num) => num * 2);
const filterArray = array.filter((num) => num > 5);
const reduceArray = array.reduce((accumulator, num) => {
	return accumulator + num;
}, 0);

// includes, padStart, padEnd
const pets = ["cat", "dog", "bat"];
pets.includes("dog"); // true

"Turtle".padStart(10); // "   Turtle"
"Turtle".padEnd(10); // "Turtle   "

// flat
const array = [1, 2, 3, [3, 4]];
array.flat(); // [1, 2, 3, 3, 4]

// flatMap
const arrayList = array.flatMap((num) => num + 1); // [2, 3, 4, '3,41']

// Object.values, Object.entries, Object.keys
let objData = {
	userName0: "Santa",
	userName1: "Rudolf",
	userName2: "Mr.Grinch",
};
Object.keys(objData).forEach((key, index) => {
	console.log(key, objData[key]);
});
// userName0 Santa
// userName1 Rudolf
// userName2 Mr.Grinch

Object.values(objData).forEach((value, index) => {
	console.log(value);
});
// Santa
// Rudolf
// Mr.Grinch

Object.entries(objData).forEach((value, index) => {
	console.log(value);
});
// ['userName0', 'Santa']
// ['userName1', 'Rudolf']
// ['userName2', 'Mr.Grinch']

const obj2 = Object.entries(objData);
console.log(Object.fromEntries(obj2));
// {userName0: 'Santa', userName1: 'Rudolf', userName2: 'Mr.Grinch'}

// reference type
var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

// context vs scope
const object4 = {
	a: function () {
		console.log(this);
	},
};

// instantiation
class Player {
	constructor(name, type) {
		this.name = name;
		this.type = type;
	}
	introduce() {
		console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
	}
}

class Wizard extends Player {
	constructor(name, type) {
		super(name, type);
	}
	play() {
		console.log(`WEEEEEE I'm a ${this.type}`);
	}
}

const wizard1 = new Wizard("Shelly", "Healer");
const wizard2 = new Wizard("Shawn", "Dark Magic");
wizard1.play();
wizard1.introduce();
wizard2.play();
wizard2.introduce();

// object pass by Reference
let obj = { a: "a", b: "b", c: { deep: "try and copy me" } };
let clone1 = Object.assign({}, obj);
let clone2 = { ...obj };
let superClone = JSON.parse(JSON.stringify(obj));

obj.c.deep = "hahahaha";

console.log(obj);
console.log(clone1);
console.log(clone2);
console.log(superClone);

try {
	bob + "hi";
} catch (error) {
	console.log("you messed up", error);
	console.log("you messed up", error);
}
