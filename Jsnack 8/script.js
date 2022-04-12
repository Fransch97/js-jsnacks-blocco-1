console.log("working");

/*
 JSnack 8
 Chiedi un numero di 4 cifre all’utente
 e calcola la somma di tutte le cifre che compongono il numero.
 in questo caso possiamo sfruttare a nostro vantaggio il fatto che
 la funzione prompt restituisca una stringa anche se si è digitato un numero
 e recuperare una cifra alla volta usanto il ciclo for per scorrere la stringa numerica
*/

let UserNumber = prompt("inserisci un numero a quattro cifre");

const arrNumbers = [];

console.log(UserNumber, UserNumber.charAt())

const contatore = UserNumber.charAt();

for(i = 0; i < UserNumber.length; i++){
    const numberextract = UserNumber.charAt(i);
    arrNumbers.push(numberextract);
    console.log("array",arrNumbers);
}
let somma = 0;
for(i = 0; i < arrNumbers.length; i++){
    somma += parseInt(arrNumbers[i]);
    console.log(somma);
}

document.querySelector('body').innerHTML += `<div>Risultato ${somma}</div>`
