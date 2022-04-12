console.log("working");

/*
 JSnack 2
 L’utente inserisce due parole in successione, con due prompt.
 Il software stampa prima la parola più corta, poi la parola più lunga.
*/

let primaParola = false;

let secondaParola = false;

let firstLength = 0;

let secondLength = 0;

let primaInserita;

let secondaInserita;

while(!primaParola){
        primaInserita = prompt("Inserisci una parola");

    if(!(primaInserita === "")){
        primaParola = true;
        console.log(primaInserita.length)
         firstLength = primaInserita.length;
        console.log(firstLength)
    }
}

while(!secondaParola){
    secondaInserita = prompt("Inserisci la seconda parola");

    if(!(secondaInserita === "")){
        secondaParola = true;
        console.log(secondaInserita.length)
         secondLength = secondaInserita.length;
        console.log(secondLength)
    }
}

if (firstLength == secondLength){
    document.querySelector('body').innerHTML += `
    <h1 style="text-align: center;">Le parole sono lunghe uguali</h1>

     
     `
}else if(firstLength > secondLength){
    document.querySelector('body').innerHTML += `
    <h1 style="text-align: center;">La parola più corta è (${secondLength}) ${secondaInserita} </h1>
    <h1 style="text-align: center;">La parola più lunga è (${firstLength})  ${primaInserita}</h1>

     
     `
}else{
    document.querySelector('body').innerHTML += `
    <h1 style="text-align: center;">La parola più corta è ${firstLength} ${primaInserita}</h1>
    <h1 style="text-align: center;">La parola più lunga è ${secondLength} ${secondaInserita}</h1>

     
     `
}

