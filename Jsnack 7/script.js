console.log("working");

/*
 JSnack 7
 Stampa le potenze di 2 fino a 1000.
 questo snack cela un trabocchetto:  1000 non è una potenza di 2
 perciò per fermarsi prima di 1000 bisogna stampare la potenza prima di incrementarla
 perché altrimenti il controllo viene fatto dopo e si sfora
*/
const potenza = 2;
let somma = 2;
let limit = false;
const array = [];
while (!limit){
    if(somma > 1000){
        limit = true
    }else{
        somma = somma * potenza;
        console.log(somma);
        array.push(somma);
    }
}

array.pop();

for(i = 0; i<array.length; i++){
    console.log(array[i]);
}






// let cubo = parseInt(prompt("inserisci un numero per il cubo"));
// const userNumber = cubo
// for(i = 0; i < 3; i++){
// cubo = cubo * userNumber;
// console.log(cubo, i);
// document.querySelector('body').innerHTML += `<div>${cubo}</div>`
// }