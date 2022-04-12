console.log("working");

/*
 JSnack 6
 Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.
*/

let cubo = parseInt(prompt("inserisci un numero per il cubo"));
const userNumber = cubo
for(i = 0; i < 3; i++){
cubo = cubo * userNumber;
console.log(cubo, i)
}