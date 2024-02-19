var input = document.getElementById("userinput");
var btn = document.getElementById("enter");
var todoList = document.getElementById("itemList");

btn.addEventListener("click", function () {
	if (input.value > 0) {
		createEle();
	}
});

function createEle() {
	let list = document.createElement("li");
	let btnEle = document.createElement("button");
	let listContent = document.createElement("span");
	btnEle.className = "deleted";
	btnEle.innerHTML = "DEL";
	btnEle.addEventListener("click", deleteFn);

	listContent.innerHTML = input.value;
	list.appendChild(listContent);
	list.appendChild(btnEle);
	todoList.appendChild(list);
	input.value = "";

	function deleteFn() {
		list.remove();
	}
}

const options = {
	method: "GET",
	url: "https://randomuser.me/api/",
};

axios
	.request(options)
	.then((res) => {
		console.log(res);
	})
	.catch(function (error) {
		console.error(error);
	});
