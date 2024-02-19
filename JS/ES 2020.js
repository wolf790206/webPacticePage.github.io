// Bigint
// https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/BigInt

// Nullish Coalescing Operator ??
// https://pjchender.dev/javascript/js-operator/#%E7%A9%BA%E5%80%BC%E8%81%AF%E5%90%88%E9%81%8B%E7%AE%97%E5%AD%90nullish-coalescing-operator

// Optional Chaining Operator ?.
https://pjchender.dev/javascript/js-operator/#optional-chaining-operator

let will_pokemon = {
	pikachu: {
		species: "Mouse Pokemon",
		height: 0.4,
		weight: 6,
	},
};

let andrei_pokemon = {
	raichu: {
		species: "Mouse Pokemon",
		height: 0.8,
		weight: 30,
	},
};

let weight = will_pokemon.pikachu.weight;
//6
let weight2 = will_pokemon.pikachu.weight;
// undefine

let andrei_pokemon = {
	pikachu: {
		species: "Mouse Pokemon",
		height: 0.8,
		weight: 30,
	},
};
let weight3 = andrei_pokemon?.pikachu?.weight;
// 30

console.log(weight);
