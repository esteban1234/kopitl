$(document).ready(function(){
	if($(window).width() >= 800){
	    $(window).scroll(function(){
	        if( $(this).scrollTop() > 0 ) {

	           $('header').addClass('header2');
	    } else{
	           $('header').removeClass('header2');


	    }

	   });
	}else{
		$(function() {
    var contador = 1;
    var pull = $('.menu-op');
    menu = $('nav');
    abrir = $('.abrir');
    cerrar = $('.cerrar');
    // menuHeight = pull.height();

    $(pull).on('click', function(e) {
        e.preventDefault();
        if (contador == 1) {
           menu.slideToggle(1000);
           abrir.slideToggle(1000);
           cerrar.slideToggle(1000);
            contador = 0;
        } else {
            menu.slideToggle(1000);
            cerrar.slideToggle(1000);
            abrir.slideToggle(1000);
            contador = 1;
        }
    });
});

	}
});
