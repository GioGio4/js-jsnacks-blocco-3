// SNACK4 - TRACCIA
// Fai inserire un numero all'utente.
//  Poi continua a chiedere numeri finché la serie è crescente
//  (l'ultimo numero inserito deve essere maggiore del precedente).
//   Alla fine stampali tutti.
// --------------------------------------------------------------------------//

const user_list_number = [0,];
//Far inserire un numero all'utente
let user_number = parseInt(prompt("Inserisci un numero a scelta."));
user_list_number.push(user_number);

console.log(user_list_number);
console.log("Numero utente " + user_number);

// debugger;
//Fai inserire dinuvo un numero all'utente FINCHè la serie è crescente 
let i = 0;
while (user_list_number[i] < user_number) {

    user_number = parseInt(prompt("Inserisci un numero maggiore di quello precedente."));
    user_list_number.push(user_number);

    i++
}
// Infine stampa la lista dei numeri

document.getElementById("number-list").innerHTML = ("La tua lista di Numeri= " + user_list_number);