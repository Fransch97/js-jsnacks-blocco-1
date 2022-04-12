console.log("working");

/*
 JSnack 5
 Crea un array vuoto.
 Chiedi per 6 volte all’utente di inserire un numero,
 se è dispari inseriscilo nell’array
*/
const pari = [];
let counter = 0;

while(counter < 6){
    counter++;
    console.log(counter);
    const askNumber = parseInt(prompt(`inserisci 6 volte un numero. Volta NR ${counter}`))
    if(!(askNumber%2)){
        pari.push(askNumber);
        console.log(pari);
    }
}