head.ready(function() {

	// click
	$(document).click(function() {
		$(".js-select").removeClass("is-active");
		$(".js-select-list").slideUp(100);
	});

	// filter
	$('.js-filter').on('click', function() {
		var btn = $(this).parents('.js-item');
		if (btn.hasClass('is-hide')) {
			btn.removeClass('is-hide');
		}
		else {
			btn.addClass('is-hide');
		}
		wHeight();
	});

	// select
	$("body").on("click",".js-select",function(event) {
		event.stopPropagation();
	});
	$("body").on("click",".js-select-text",function(event) {
		var select = $(this).parents(".js-select");
		if (select.hasClass("is-active")) {
			$(".js-select").removeClass("is-active");
			$(".js-select-list").slideUp(100);
		}
		else {
			$(".js-select").removeClass("is-active");
			$(".js-select-list").slideUp(100);
			select.toggleClass("is-active").find(".js-select-list").slideToggle(100);
		}
		
	});
	$("body").on("click",".js-select-list li",function() {
		var val = $(this).attr("data-val");
		var text = $(this).text();
		var select = $(this).parents(".js-select");
		var selectList = $(this).parents(".js-select-list");
		select.find(".js-select-text").text(text);
		select.find("option").removeAttr("selected");
		select.find('option[value="'+val+'"]').attr("selected", "selected");
		selectList.find("li").removeClass("is-active");
		$(this).addClass("is-active");
		select.removeClass("is-active");
		selectList.slideUp(100);
		return false;
	});

	// height
	function wHeight() {
		if (($(window).height()) < ($('.js-col2').height() + 97)) {
			$('.js-out').removeClass('is-full');
		} else {
			$('.js-out').addClass('is-full');
		}
	} wHeight();

});