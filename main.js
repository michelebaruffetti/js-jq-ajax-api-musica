$(document).ready(function() {
	//Code



    $.ajax({
        'url' : 'https://flynn.boolean.careers/exercises/api/array/music',
        'method' : 'GET',
        'success' : function(data) {
            var catalogo_dischi = data.response;
            console.log(catalogo_dischi);
        },
        'error' : function() {
            alert('Le multinazionali della musica ti negano di ascoltare musica immortale')
        }

        for (var i = 0; i < catalogo_dischi.length; i++) {
            // all'interno del ciclo for devo fare lavorare handlebar sul template che andrò a predisporre
        }

    })



});
