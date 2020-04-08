// Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e cliccando invia il testo viene aggiunto al thread sopra, come messaggio verde


$(document).ready(function(){

 var text = $('.mainchat');
 var send = $('.fa-paper-plane');
 var search =$('.fa-search')


 send.click(
   function () {

     // valore input
     var userSend = $('#mytext').val();
     // stampo il messaggio
     text.append('<div class="greenmessage"><span>' + userSend + '</span><i class="fas fa-chevron-down"></i></div>');
     // input vuoto
     $('input').val('');
     // dopo un secondo arriva la risposta automatica
     setTimeout(function(){
       text.append('<div class="whitemessage"><span>' + 'ok' + '</span><i class="fas fa-chevron-down"></i></div>');
     }, 1000);

   }

 );

    // cliccando enter, invio il messaggio

      $('.container').keypress(function(enter) {
      if ( enter.which == 13 ) {
      send.click();
      }
      });


  // ricerca tra i contatti con click su search

  search.click(
    function(){
      // salvo l'input
      var searchcontacts = $('#friendinput').val().toLowerCase();

      // ciclo tra i contatti
      $('.contact').each(function(){
        // salvo il valore del testo
        var myFriend = $(this).find('.myfriend').text().toLowerCase();

        // se il contatto esiste lo mostro e nascondo gli altri
        if(myFriend.includes(searchcontacts)){
          $(this).show();
        }else{
          $(this).hide();
        }

    });

    }
  )
      // cliccando sulla tastiera trova la chat
        $('.container').keypress(function(enter) {
        if ( enter.which == 32 ) {
        search.click();
        }
        });











 // filtro contatti
  //gestirte evento su tastiera (oppure su click di bottone di input ricerca)

  // salvarmi input utente in campo del filtro (stringa1)

  // selezionare tutti i blocchi di contatto e ciclare tra di essi (each())
    //salvo in una var il valore del testo del nome nel contatto (stringa2)

    // confronto per vedere se la stringa inserita nell'input è inclusa nel nome del contatto
      //stringa2.includes(stringa1)
      //se l'occorenza è stata trovata lascio il blocco di contatto visibile
      // altrimenti lo rendo non visibile (this)


});


// Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)