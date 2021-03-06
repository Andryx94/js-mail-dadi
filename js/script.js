//CONTROLLO EMAIL
//variabili convalida Email
var emailVerifica = document.getElementById('email-verifica');
var bottoneInviaAVerifica = document.getElementById('bottone-invia-verifica');
var bottoneAnnullaVerifica = document.getElementById('bottone-annulla-verifica');
var alertEmailVerifica = document.getElementById('alert-email-verifica');

// variabili verifica Email
var emailAggiungi = document.getElementById('email-aggiungi');
var bottoneInviaAggiungi = document.getElementById('bottone-invia-aggiungi');
var bottoneAnnullaAggiungi = document.getElementById('bottone-annulla-aggiungi');
var alertEmailAggiungi = document.getElementById('alert-email-aggiungi');

//variabile array email email valide
var emailValide = ["nomecognome@gmail.com", "nomecognome@yahoo.com", "nomecognome@libero.it", "nomecognome@alice.it"]

//click convalida email
bottoneInviaAVerifica.addEventListener('click',
function () {
  if (emailVerifica.value != "") {
    if (alertEmailVerifica.value != "L'Email è presente") {
      alertEmailVerifica.innerHTML = "L'Email non è presente";
    }

    for (var i=0; i< emailValide.length; i++) {
      if (emailValide[i] == emailVerifica.value) {
        alertEmailVerifica.innerHTML = "L'Email è presente";
      }
    }
  }
}
);

bottoneAnnullaVerifica.addEventListener('click',
function () {
  emailVerifica.innerHTML = emailVerifica.value = "";
  alertEmailVerifica.innerHTML = "";
}
);

//click verifica email
bottoneInviaAggiungi.addEventListener('click',
function () {
  if (emailAggiungi.value != "") {
    var emailValidaAggiunta = emailAggiungi.value
    emailValide.push(emailValidaAggiunta);
    alertEmailAggiungi.innerHTML = "Email aggiunta";
  }
}
);

bottoneAnnullaAggiungi.addEventListener('click',
function () {
  emailAggiungi.innerHTML = emailAggiungi.value = "";
  alertEmailAggiungi.innerHTML = "";
}
);


//DADI
//variabili lancio dadi
var bottoneDadoUtente = document.getElementById('bottone-dado-utente');
var bottoneDadoAnnulla = document.getElementById('bottone-dado-annulla');
var risultatoDadoUtente = document.getElementById('risultato-dado-utente');
var risultatoDadoPC = document.getElementById('risultato-dado-pc');
var vincitore = document.getElementById('vincitore');
var noHidden = document.getElementById('nohidden');

//click lancio dadi
bottoneDadoUtente.addEventListener('click',
function () {
  var dadoUtente = Math.floor(Math.random() * 6) + 1;
  var dadoPC = Math.floor(Math.random() * 6) + 1;
  risultatoDadoUtente.innerHTML = dadoUtente;
  risultatoDadoPC.innerHTML = dadoPC;

  if (dadoUtente > dadoPC) {
    vincitore.innerHTML = "Hai vinto! :)"
  }

  else if (dadoUtente < dadoPC) {
    vincitore.innerHTML = "Hai perso! :("
  }

  else {
    vincitore.innerHTML = "Pareggio! :|"
  }

  noHidden.className = "";
}
);

bottoneDadoAnnulla.addEventListener('click',
function () {
  noHidden.className = "hidden";
}
);
