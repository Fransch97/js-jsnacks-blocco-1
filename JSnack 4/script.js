console.log("working");
/*
 JSnack 4
 In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
 chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/

const InviteName = ["francesco","rafi","stefano","simone","giovanni"];

let asker = prompt("Vedi se sei stato invitato");

asker = asker.toLowerCase();

console.log(asker)

let confirm = false;

for(i = 0; i < InviteName.length; i++){
    let checking = InviteName[i];
    console.log(checking);
    if(asker === checking ){
        confirm = true;
    }
}

if(confirm){
    alert("Sei stato invitato");
}else{
    alert("non sei stato invitato")
}