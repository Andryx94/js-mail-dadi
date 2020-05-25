//CONTROLLO EMAIL
// variabili verifica Email
var emailAggiungi = document.getElementById('email-aggiungi');
var bottoneInviaAggiungi = document.getElementById('bottone-invia-aggiungi');
var bottoneAnnullaAggiungi = document.getElementById('bottone-annulla-aggiungi');
var emailValidaAggiuntaLista = document.getElementById('email-valida-aggiunta');
var emailValide = ["nomecognome@gmail.com", "nomecognome@yahoo.com", "nomecognome@libero.it", "nomecognome@alice.it"]

//variabili convalida Email
var emailVerifica = document.getElementById('email-verifica');
var bottoneInviaAVerifica = document.getElementById('bottone-invia-verifica');
var bottoneAnnullaVerifica = document.getElementById('bottone-annulla-verifica');
var alertEmailVerifica = document.getElementById('alert-email-verifica');

//click verifica email
bottoneInviaAggiungi.addEventListener('click',
function () {
  var emailValidaAggiunta = emailAggiungi.value
  emailValide.push(emailValidaAggiunta);
  emailValidaAggiuntaLista.innerHTML = emailValidaAggiunta;
}
);

bottoneAnnullaAggiungi.addEventListener('click',
function () {
  emailAggiungi.innerHTML = emailAggiungi.value = "";
}
);

//click convalida email
bottoneInviaAVerifica.addEventListener('click',
function () {
  if (alertEmailVerifica.value != "L'Email è presente") {
    alertEmailVerifica.innerHTML = "L'Email non è presente";
  }

  for (var i=0; i< emailValide.length; i++) {
    if (emailValide[i] == emailVerifica.value) {
      alertEmailVerifica.innerHTML = "L'Email è presente";
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

//DADI
//variabili lancio dadi
var bottoneDadoUtente = document.getElementById('bottone-dado-utente');
var risultatoDadoUtente = document.getElementById('risultato-dado-utente');
var risultatoDadoPC = document.getElementById('risultato-dado-pc');
var vincitore = document.getElementById('vincitore');

//click lancio dadi
bottoneDadoUtente.addEventListener('click',
function () {
  var dadoUtente = Math.floor(Math.random() * 6) + 1;
  var dadoPC = Math.floor(Math.random() * 6) + 1;
  risultatoDadoUtente.innerHTML = dadoUtente;
  risultatoDadoPC.innerHTML = dadoPC;

  if (dadoUtente > dadoPC) {
    vincitore.innerHTML = "Hai vinto!"
  }

  else if (dadoUtente < dadoPC) {
    vincitore.innerHTML = "Hai perso :("
  }

  else {
    vincitore.innerHTML = "Pareggio!"
  }
}
);
