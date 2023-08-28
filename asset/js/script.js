/*
Gioco dei dadi

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Mail
Chiedi all'utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

Strumenti.

- prompt
- if / else
- for
- array
- const 

*/

const userMails = ['pincopallo@outlook.it', 'mariorossi@gmail.com', 'ziotom@libero.it'];

console.log(userMails);

const listElement = document.querySelector('ul');

for (let i = 0; i < userMails.length; i++) {
    
    const mail = userMails[i];

    console.log(mail);

    const listItem = `<li>${mail}</li>`
   
    document.getElementById('submit').addEventListener("click", function() {
    
        const userName = document.getElementById('mail').value;
        
        console.log(userName);
    
        if(userName === 'pincopallo@outlook.it') {
    
          console.log(mail);
    
        } else if(userName === 'mariorossi@gmail.com') {

            console.log(mail);

        } else if (userName === 'ziotom@libero.it') {

            console.log(mail);

        } else {

            alert("Ops!, non puoi accedere a questa pagina, riprova.")

        }
    
    })

}










