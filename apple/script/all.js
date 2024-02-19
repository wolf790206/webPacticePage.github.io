var screenHeight = screen.height;
var screenWidth = screen.width;

// Navigate
var hambtn = $(".hum-btn");
var header = $("#header");
var humberger = $(".hamburger");
hambtn.click(function () {
	$(this).toggleClass("active");
	if (hambtn.hasClass("active")) {
		header.css("background", "#000");
		header.css("height", "100vh");
		humberger.css("display", "flex");
	} else {
		header.css("background", "#424245");
		header.css("height", "48px");
		humberger.css("display", "none");
	}
});

var footerNav = $("#footer .nav-section");
footerNav.click(function () {
	if (window.innerWidth < 833) $(this).toggleClass("active");
});

var mainNav = $("#main-nav");
var navBtn = $("#main-nav .nav-btn");
var navItem = $("#main-nav .nav-item");

navBtn.click(function () {
	if (mainNav.hasClass("active")) {
		mainNav.toggleClass("active");
		navBtn.toggleClass("active");
		navItem.css("opacity", "0");
		setTimeout(function () {
			navItem.toggleClass("active");
		}, 500);
	} else {
		mainNav.toggleClass("active");
		navBtn.toggleClass("active");
		setTimeout(function () {
			navItem.css("opacity", "1");
			navItem.toggleClass("active");
		}, 50);
	}
});
function resizeFont() {
	if (window.innerWidth > 1024) {
		$("#part-1 .ani-section1 .text").css("fontSize", `120px`);
		$("#part-1 .ani-section2 .text .product-name").css("fontSize", `32px`);
		$("#part-1 .ani-section2 .text .product-size").css("fontSize", `96px`);
	}
	if (window.innerWidth < 1024) {
		let num = 40 + (window.innerWidth - 450) / 10;
		$("#part-1 .ani-section1 .text").css("fontSize", `${num}px`);
		$("#part-1 .ani-section2 .text .product-name").css("fontSize", `${num / 3}px`);
		$("#part-1 .ani-section2 .text .product-size").css("fontSize", `${num * 1.1}px`);
	}
}
resizeFont();
$(window).resize(resizeFont);

function scrollAnimate() {
	let scrollY = this.scrollY;
	// console.log(scrollY);
	scrollY >= 50 ? mainNav.removeClass("container") : mainNav.addClass("container");
	if (scrollY < screen.height * 0.8) {
		let logoSection = $("#main .logo-section");
		let logoSectionImg = $("#main .logo-section img");
		let num = 1 - scrollY / (logoSection.innerHeight() / 1.2);
		logoSectionImg.css("opacity", `${num}`);
	}
	console.log("scroll", scrollY);

	// console.log(scrollY - logoSection.innerHeight());
	let stickySection = screenHeight * 2;
	let textAniHeight = (scrollY / stickySection) * 100;
	let stickyImage = $("#main .sticky-image");
	console.log("scroll%%%%", textAniHeight);
	// 0-20
	// 20-50
	// 50-80
	// 80-100
	if (40 < Math.ceil(textAniHeight) && Math.floor(textAniHeight) < 50) {
		let topNum = -(screenHeight * 0.8) + scrollY;
		stickyImage.css("top", `${topNum}px`);
	}
	if (50 < Math.ceil(textAniHeight) && Math.floor(textAniHeight) < 70) {
		let topNum = -(screenHeight * 0.8) + scrollY;
		stickyImage.css("top", `${topNum}px`);
	}
	if (0 < Math.ceil(textAniHeight) && Math.floor(textAniHeight) < 20) {
		let num = textAniHeight / 20;
		let leftTranslate = -(150 * num) + 100;
		let rightTranslate = -(180 * num) + 80;
		let textAniLeft = $("#part-1 .ani-section1 .text.left");
		let textAniReght = $("#part-1 .ani-section1 .text.right");
		let scaleX = 0.7 * num * num + 0;
		let scaleY = 1 * num * num + 0;

		textAniLeft.css("transform", `translate(50%, ${leftTranslate}%) skew(180deg, 345deg) scale(${scaleX}, ${scaleY})`);
		textAniReght.css("transform", `translate(-50%, ${rightTranslate}%) skew(180deg, 15deg) scale(${scaleX}, ${scaleY})`);
	}

	if (20 < Math.ceil(textAniHeight) && Math.floor(textAniHeight) < 50) {
		let num = (textAniHeight - 20) / 30;
		let leftTranslate = 150 * num - 50;
		let rightTranslate = 180 * num - 100;
		let textAniLeft = $("#part-1 .ani-section1 .text.left");
		let textAniReght = $("#part-1 .ani-section1 .text.right");
		let scaleX = -(0.7 * num * 1.3) + 0.7;
		let scaleY = -(1 * num * 1.3) + 1;
		textAniLeft.css("transform", `translate(50%, ${leftTranslate}%) skew(180deg, 345deg) scale(${scaleX}, ${scaleY})`);
		textAniReght.css("transform", `translate(-50%, ${rightTranslate}%) skew(180deg, 15deg) scale(${scaleX}, ${scaleY})`);
	}
	if (40 < Math.ceil(textAniHeight)) {
		stickyImage.css("overflow", "hidden");
	} else if (Math.floor(textAniHeight) < 40) {
		stickyImage.css("overflow", "visible");
		console.log("zzz");
	}
	if (30 < Math.ceil(textAniHeight) && Math.floor(textAniHeight) < 50) {
		let num = (textAniHeight - 30) / 20;
		let leftTranslate = -(95 * num) + 50;
		let rightTranslate = 90 * num - 50;
		let textAniLeft = $("#part-1 .ani-section2 .text.left");
		let textAniReght = $("#part-1 .ani-section2 .text.right");
		textAniLeft.css("transform", `translate(${leftTranslate}%, -25%) skew(180deg, 345deg) scale(0.7, 1)`);
		textAniReght.css("transform", `translate(${rightTranslate}%, -30%) skew(180deg, 15deg) scale(0.7, 1)`);
	}
	if (50 < Math.ceil(textAniHeight) && Math.floor(textAniHeight) < 70) {
		let num = (textAniHeight - 50) / 20;
		let leftTranslate = 95 * num - 45;
		let rightTranslate = -(90 * num) + 40;
		let textAniLeft = $("#part-1 .ani-section2 .text.left");
		let textAniReght = $("#part-1 .ani-section2 .text.right");
		textAniLeft.css("transform", `translate(${leftTranslate}%, -25%) skew(180deg, 345deg) scale(0.7, 1)`);
		textAniReght.css("transform", `translate(${rightTranslate}%, -30%) skew(180deg, 15deg) scale(0.7, 1)`);
	}
	if (textAniHeight > 65.4) {
		let textAniLeft = $("#part-1 .ani-section");
		let textAniReght = $("#part-1 .ani-section");
		textAniLeft.hide();
		textAniReght.hide();
	} else {
		let textAniLeft = $("#part-1 .ani-section");
		let textAniReght = $("#part-1 .ani-section");
		textAniLeft.show();
		textAniReght.show();
	}
	if (65 < Math.ceil(textAniHeight) && Math.floor(textAniHeight) < 75) {
		let num = (textAniHeight - 65) / 10;
		let leftTranslate = -(110 * num);
		let rightTranslate = 110 * num;
		let scale = -(0.4 * num) + 1;
		let textAniLeft = $("#part-1 .phone.left");
		let textAniReght = $("#part-1 .phone.right");
		textAniLeft.css("transform", `translateX(${leftTranslate}%) scale(${scale})`);
		textAniReght.css("transform", `translateX(${rightTranslate}%) scale(${scale})`);
	} else if (65 > Math.ceil(textAniHeight)) {
		let textAniLeft = $("#part-1 .phone.left");
		let textAniReght = $("#part-1 .phone.right");
		textAniLeft.css("transform", `translateX(0%) scale(1)`);
		textAniReght.css("transform", `translateX(0%) scale(1)`);
	} else if (75 < Math.ceil(textAniHeight)) {
		let textAniLeft = $("#part-1 .phone.left");
		let textAniReght = $("#part-1 .phone.right");
		textAniLeft.css("transform", `translateX(-110%) scale(0.6)`);
		textAniReght.css("transform", `translateX(100%) scale(0.6)`);
	}

	// 65-68  68-85  85-95
	if (50 < textAniHeight <= 80) {
	}
	if (80 < textAniHeight <= 100) {
	}
}
scrollAnimate();
$(window).scroll(scrollAnimate);

// $(window).scroll(function () {
// 	if ($(this).scrollTop() === 0) {
// 		$(".dropdown-menu").css("bottom", "50px");
// 		$(".dropdown-menu").css("top", "auto");
// 	} else {
// 		$(".dropdown-menu").css("top", "50px");
// 		$(".dropdown-menu").css("autp", "auto");
// 	}
// });
// $(function () {
// 	console.log($(window).width);
// 	if ($(window).width < 769) {
// 		if ($(this).scrollTop() === 0) {
// 			$(".navbar-collapse").css("bottom", "65px");
// 			$(".navbar-collapse").css("top", "auto");
// 		} else {
// 			$(".navbar-collapse").css("top", "50px");
// 			$(".navbar-collapse").css("autp", "auto");
// 		}
// 	}
// });
