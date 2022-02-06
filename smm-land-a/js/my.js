
$(document).ready(function(){

// mob nav
    $('.open-nav').click(function(){
        $('.wrap-nav').addClass('open');
        $('.overlay').addClass('open');
    });
    $('.close-nav, .overlay').click(function(){
        $('.wrap-nav').removeClass('open');
        $('.overlay').removeClass('open');
    });


// niceSelect
    $('select').niceSelect();


    // $('select').niceSelect();
    $.fn.allTheClasses = function() {
        return this[0].className.split(' ').slice(1,this[0].length);
    }
    $('.nice-select .option').click(function () {
        var newClass = $(this).allTheClasses();
        $(this).parents('.nice-select').find('.current').attr('class', 'current ' + newClass.join(' '));
    });

    tippy('[data-tippy-content]', {
        theme: 'light',
        animation: 'scale',
        maxWidth: 220
    });

    tippy('.social-list__btn--other', {
        theme: 'light',
        animation: 'scale',
        maxWidth: 275,
        trigger: 'click',
        placement: 'left-start',
        content(reference) {
            const id = reference.getAttribute('data-template');
            const template = document.getElementById(id);
            return template.innerHTML;
        },
        allowHTML: true,
    });

    $('.more-btn a.toggle').click(function(e) {
		e.preventDefault()
		$(".category_items").show();
		$(this).parent().hide();
	 
	});



    $(window).resize(() => {
        // Моб. версия
        if (!fiestResize) {
            $('meta[name=viewport]').attr('content', 'width=device-width, initial-scale=1, maximum-scale=1')
            if ($(window).width() < 360) $('meta[name=viewport]').attr('content', 'width=360, user-scalable=no')
    
            fiestResize = true
        } else {
            fiestResize = false
        }
    })


    	// Моб. версия
	fiestResize = false

	if ($(window).width() < 360) {
		$('meta[name=viewport]').attr('content', 'width=360, user-scalable=no')

		fiestResize = true
	}


       

});
