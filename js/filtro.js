$(document).ready(function() {
    $('.filter').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
        let valor = $(this).attr('data-nombre');
        if (valor == 'todos') {
            $('.cont-work').show('1000');
        } else {
            $('.cont-work').not('.' + valor).hide('1000');
            $('.cont-work').filter('.' + valor).show('1000');
        }
    });

    /* ENLACES */
    let nosotros = $('#nosotros').offset().top,
        producto = $('#producto').offset().top,
        servicio = $('#servicio').offset().top,
        contacto = $('#contacto').offset().top;

    window.addEventListener('rezise', function() {
        let nosotros = $('#nosotros').offset().top,
            producto = $('#producto').offset().top,
            servicio = $('#servicio').offset().top,
            contacto = $('#contacto').offset().top;
    });

    $('#logo').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 600);
    });

    $('#enlace-inicio').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 600);
    });

    $('#enlace-servicio').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: servicio - 100
        }, 600);
    });

    $('#enlace-nosotros').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: nosotros - 100
        }, 600);
    });

    $('#enlace-producto').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: producto - 100
        }, 600);
    });

    $('#enlace-contacto').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contacto - 100
        }, 600);
    });

});