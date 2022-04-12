console.log("working");

/*
 JSnack 9
 Calcola la somma e la media dei primi 10 numeri.
*/
let somma = 0;
for(i = 1; i <= 10; i++){
    somma += i;
    console.log(somma);
}

const media = somma / 10;

document.querySelector('body').innerHTML += `<div>La media dei primi 10 numeri è ${media}</div>`
