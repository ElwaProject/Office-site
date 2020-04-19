$(document).on("click", ".projects-slider__link_1", function () {
	$(".projects-slider__img_1")
		.addClass("active")
		.siblings()
		.removeClass("active"),
		$(this).addClass("active-link").siblings().removeClass("active-link");
});
$(document).on("click", ".projects-slider__link_2", function () {
	$(".projects-slider__img_2")
		.addClass("active")
		.siblings()
		.removeClass("active"),
		$(this).addClass("active-link").siblings().removeClass("active-link");
});
$(document).on("click", ".projects-slider__link_3", function () {
	$(".projects-slider__img_3")
		.addClass("active")
		.siblings()
		.removeClass("active"),
		$(this).addClass("active-link").siblings().removeClass("active-link");
});
