$(document).ready(function(){

	$(".comment-list_button").click(function(e){
		e.preventDefault();
		$(".comment-list_head").after($('.comment_form'));
		$(".comment_form").slideDown();		

		$(".comment_form textarea").focus();
		$(".comment_form label").text("Введите коментарий");
	});

	$(document).on('click', '.show-button', function(e) {	
		e.preventDefault();
		$(this).addClass("hide-button").removeClass("show-button");
		$(this).closest('.comment').find(".children").css("display", "flex");
		let data_temp = $(this).data("temp");
		$(this).data("temp", $(this).text());
		$(this).text(data_temp);
	});

	$(document).on('click', '.hide-button', function(e) {
		e.preventDefault();
		$(this).removeClass("hide-button").addClass("show-button");
		$(this).closest('.comment').find(".children").slideUp();
		let data_temp = $(this).data("temp");
		$(this).data("temp", $(this).text());
		$(this).text(data_temp);
	});

	$(document).on('click', '.answer-button', function(e) {
		e.preventDefault();
		let el = $(this).closest('.comment')
		el.append($('.comment_form'));
		$(".comment_form").slideDown();
		$(".comment_form textarea").focus();

		let author = $(this).parent().parent().prev().prev().find(".comment-list_author").text();
		$(".comment_form label").text("Ответ для "+ author);	
	});

});