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
- getElementById
- append
- Math.floor / Math.random
- addEventListener
- alert
- let

*/

const userMails = ['pincopallo@outlook.it', 'mariorossi@gmail.com', 'artur@boolean.it', 'paolo@boolean.it' ];

console.log(userMails);

const listElement = document.querySelector('ul');

document.getElementById('submit').addEventListener("click", function() {
    // leggo valore della mail dall'input
    const userName = document.getElementById('email').value;
    
    console.log(userName);

    let inList = false;

    // itero l'array con le email approvate
    for (let i = 0; i < userMails.length; i++) {
        
        if(userName === userMails[i]) {

            console.log(userMails[i]);
    
            const listItem = `${userMails[i]}`;

            listElement.append(listItem);

            inList = true;
    
        }
    
    }

    if(inList == false){

        const listItem = `Email non valida`;

        listElement.append(listItem);

        alert("Email non valida");

    }

})

document.getElementById('generate').addEventListener("click", function() {

    const userNumber = Math.floor(Math.random() * 6) + 1;

    console.log(userNumber);

    const computerNumber = Math.floor(Math.random() * 6) + 1;
    
    console.log(computerNumber);

    if(userNumber > computerNumber) {

        alert("Congratulations! your lucky number is " + userNumber + " play again.");

    } else if(userNumber === computerNumber) {

        alert("The number is even, try again.");

    } else {

        alert("Sorry! you are unlucky, IA number is " + computerNumber + " try again.");

    }

})