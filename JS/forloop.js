const basket = ["apples", "oranges", "grapes"];

// 1
for (let i = 0; i < basket.length; i++) {
	console.log(basket[i]);
}

// 2
basket.forEach((item) => {
	console.log(item);
});

// for of
// Iterating - arrays, strings
for (item of basket) {
	console.log("for of", item);
}

// obj
const detailedBasket = {
	apples: 5,
	oranges: 10,
	grapes: 1000,
};

// for in - properties
// enumerating - objects
for (item in detailedBasket) {
	console.log("for in - key", item);
	console.log("for in - value", detailedBasket[item]);
}
