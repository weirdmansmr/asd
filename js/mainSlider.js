let swiper = new Swiper(".mySwiper", {
	spaceBetween: 30,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		dynamicBullets: true,
	},
	mousewhell: true,
	keyboard: true,
});
