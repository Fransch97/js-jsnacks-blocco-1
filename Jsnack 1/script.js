console.log("working");

/*
 JSnack 1
 L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore
*/
alert("In seguito inserisca in ogni richesta un numero");
let valoreUno = false;
let valoreDue = false;
// let valoreUnoInserito = 0;

while(!valoreUno){
   valoreUnoInserito = parseInt(prompt("Inserire il primo numero"));
   if(!isNaN(valoreUnoInserito)){
       valoreUno = true;
   }
}
// let valoreDueInserito = 0;
while(!valoreDue){
    valoreDueInserito = parseInt(prompt("Inserire il secondo numero"));
    if(!isNaN(valoreDueInserito)){
        valoreDue = true;
    }
 }

 

 if(valoreUnoInserito > valoreDueInserito){
     
     document.querySelector('body').innerHTML += `
    <h1 style="text-align: center;">Il numero maggiore è ${valoreUnoInserito} </h1>
     
     `
 }else if (valoreUnoInserito < valoreDueInserito){
    document.querySelector('body').innerHTML += `
   <h1 style="text-align: center;">Il numero maggiore è ${valoreDueInserito} </h1>
    
    `
}else{
    document.querySelector('body').innerHTML += `
   <h1 style="text-align: center;">I numeri sono uguali</h1>
    
    `
}