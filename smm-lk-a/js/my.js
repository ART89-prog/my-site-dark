
$(document).ready(function(){

// mob nav
    $('.open-menu').click(function(){
        $('.aside--lk').addClass('active');
        $('.overlay--lk').addClass('active');
    });
    $('.overlay--lk').click(function(){
        $('.aside--lk').removeClass('active');
        $('.overlay--lk').removeClass('active');
    });


    $('.lk-password_close').click(function(){
		$('.lk-password').slideToggle(50);      
		return false;
	});

    // Fancybox
    $.fancybox.defaults.hash = false
    $.fancybox.defaults.backFocus = false
    $.fancybox.defaults.autoFocus = false
    $.fancybox.defaults.animationEffect = 'zoom'
    $.fancybox.defaults.transitionEffect = 'slide'
    $.fancybox.defaults.speed = 500
    $.fancybox.defaults.gutter = 40
    $.fancybox.defaults.i18n = {
        'en': {
            CLOSE: "Закрыть",
            NEXT: "Следующий",
            PREV: "Предыдущий",
            ERROR: "Запрошенный контент не может быть загружен.<br /> Пожалуйста, повторите попытку позже.",
            PLAY_START: "Запустить слайдшоу",
            PLAY_STOP: "Остановить слайдшоу",
            FULL_SCREEN: "На весь экран",
            THUMBS: "Миниатюры",
            DOWNLOAD: "Скачать",
            SHARE: "Поделиться",
            ZOOM: "Увеличить"
        }
    }




    setTimeout(function() { 
        if ( $(window).width() < 990 ) {

            // $.fancybox.close(true)

            $.fancybox.open({
                src: "#change_pass",
                type: 'inline',
                touch: false
            })
        }
        else {
            $.fancybox.close(true)
        }
    }, 1000);

    


// Удаление файла
	$('.form .file .selected .remove').click(function (e) {
		e.preventDefault()

		let parent = $(this).closest('.file')

		$(this).closest('div').remove()
		parent.find('input[type=file]').val('')
	})

// Копирование ссылки
    new ClipboardJS(".js-btn-clipboard").on("success", function(e) {

    });

    $('.js-copy-text').each(function(i, item) {
        $(item).addClass('referrals_item-link-' + i);
    });
       
    $(".js-btn-clipboard").click(function(e) {
        var val = $(this).data("after-text");
        $(this).text(val);
    });



    	// Пароль
	$('body').on('click', '.password-control', function () {
		if ($('#password-input').attr('type') == 'password') {
			$(this).addClass('view');
			$('#password-input').attr('type', 'text');
		} else {
			$(this).removeClass('view');
			$('#password-input').attr('type', 'password');
		}
		return false;
	});

    $('body').on('click', '.password-control4', function () {
		if ($('#password-input4').attr('type') == 'password') {
			$(this).addClass('view');
			$('#password-input4').attr('type', 'text');
		} else {
			$(this).removeClass('view');
			$('#password-input4').attr('type', 'password');
		}
		return false;
	});

    $('body').on('click', '.password-control3', function () {
		if ($('#password-input3').attr('type') == 'password') {
			$(this).addClass('view');
			$('#password-input3').attr('type', 'text');
		} else {
			$(this).removeClass('view');
			$('#password-input3').attr('type', 'password');
		}
		return false;
	});

    $('body').on('click', '.password-control5', function () {
		if ($('#password-input5').attr('type') == 'password') {
			$(this).addClass('view');
			$('#password-input5').attr('type', 'text');
		} else {
			$(this).removeClass('view');
			$('#password-input5').attr('type', 'password');
		}
		return false;
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



	$('body').on('click', '.password-control2', function () {
		if ($('#password-input2').attr('type') == 'password') {
			$(this).addClass('view');
			$('#password-input2').attr('type', 'text');
		} else {
			$(this).removeClass('view');
			$('#password-input2').attr('type', 'password');
		}
		return false;
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

    // $('.social-list__btn--other').click(function(){
    //     $('.social-list__drop').toggleClass('active');
    // });

    if (is_touch_device()) {
        let ts

        $('body').on('touchstart', (e) => { ts = e.originalEvent.touches[0].clientX; })

        $('body').on('touchend', (e) => {
            let te = e.originalEvent.changedTouches[0].clientX    

            if (ts > te + 50) {               
                $('.aside--lk').removeClass('active');
                $('.overlay--lk').removeClass('active');
            } else if (ts < te - 50) {

            }
        })
    }

});


const is_touch_device = () => !!('ontouchstart' in window)