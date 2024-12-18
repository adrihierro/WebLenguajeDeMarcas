$(function(){

    var header = document.getElementById('header');
    var headoom = new Headroom(header);
    headeroom.init();

    var ancho = $(window).width(),
        enlaces = $('#enlaces'),
        btnMenu = $('#btn-menu')
        icono = $('#btnMenu .icono');

        if (ancho < 700){
            enlaces.hide();
        }
});