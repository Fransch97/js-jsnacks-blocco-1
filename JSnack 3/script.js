console.log("working");
/*
 JSnack 3
 Il software deve chiedere per 5 volte all’utente di inserire un numero.
 Il programma stampa la somma di tutti i numeri inseriti.
 Esegui questo programma in due versioni, con il for e con il while (facoltativo)
*/
let somma = 0;


for(i = 1; i<= 5; i++){
    console.log(i)
    somma += parseInt(prompt(`inserisci un numero per cinque volte. NR ${i}`))
    console.log(somma)
}

document.querySelector('body').innerHTML += `
<h1 style="text-align: center;">La somma dei numeri da te inseriti è ${somma} calcolo ciclo "for"</h1>

`;
const limit = 5;
let counterWhile = 0;
somma = 0;
while(counterWhile< limit){
    let Number = parseInt(prompt(`inserisci un numero per cinque volte. NR ${counterWhile + 1}`))
    counterWhile++;
    if(!isNaN(Number)){
        somma += Number;
    }
}

document.querySelector('body').innerHTML += `
<h1 style="text-align: center;">La somma dei numeri da te inseriti è ${somma} calcolo ciclo "While"</h1>

`;