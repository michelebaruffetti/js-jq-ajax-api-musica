$(document).ready(function() {
	//Code
    // metto il template in una variabile
    var template_html = $('#template').html();

    // preparo la funzione per utilizzare il template
    var template_function = Handlebars.compile(template_html);

    $.ajax({
        'url' : 'https://flynn.boolean.careers/exercises/api/array/music',
        'method' : 'GET',
        'success' : function(data) {
            var catalogo_dischi = data.response;
            // console.log(catalogo_dischi);

            for (var i = 0; i < catalogo_dischi.length; i++) {
                // recupero il disco corrente
                var disco_corrente = catalogo_dischi[i];

                // creo un oggetto con i dati da inserire in riferimento a questo disco specifico

                var dati_disco = {
                    'poster' : disco_corrente.poster,
                    'titolo' : disco_corrente.title,
                    'autore' : disco_corrente.author,
                    'anno'   : disco_corrente.year,
                    'genere' : disco_corrente.genre
                };

                // handlebars per html finale
                var html_finale = template_function(dati_disco);

                // console.log(html_finale);

                $('.cds-container').append(html_finale);

            }
        },
        'error' : function() {
            alert('Le multinazionali ti negano di ascoltare musica immortale')
        }



    });

    // tentativo di select

    $('#select > option').click(function(){
        var scelta_genere = $(this).val();
        console.log(scelta_genere);

        // nascondo tutti gli album
        $(".cd").hide();


        if (scelta_genere == "all") {
            // con all mostro tutti gli album
            $(".cd").show();
        } else {
            //in caso costrario uso la MEGASTRINGA e aggiungo direttamente il data.
            $(".cd[data-genere='" + scelta_genere + "']").show();
        }


    });



});
