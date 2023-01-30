// SNACK3 - TRACCIA
// Fai inserire un numero, che chiameremo N, all'utente.
//  Genera N array, ognuno formato da 10 numeri casuali da 1 a 100.
//  Ogni volta che ne crei uno, stampalo.
// ------------------------------------------------------------------------------//


// Fai inseririre un numero all'utente, chiamato "N"
const N = parseInt(prompt("Inserisci un numero."));
console.log(N);

//Numero di array create
let array_number = 0;


// FINCHè il numero delle Array è DIVERSO da "N"
while (array_number != N) {

    // Creazione Array
    let array_10_el = [];

    //Aggiungere un numero casuale ad Array FINCHè l'array contiene 10 elementi.
    let i = 0;
    while (i < 10) {
        // Inserisci un numero casuale nell'array
        array_10_el.push(Math.floor((Math.random() * 100) + 1))

        i++
    }

    // Stampa ogni array in un "li" all'interno di una lista nel HTML
    const array_paragraph = document.createElement("li");
    array_paragraph.innerHTML = array_10_el;
    document.getElementById("array-list").append(array_paragraph);

    // console.log("ARRAY=" + array_10_el);

    // Aggiunge 1 alle Array create 
    array_number += 1;
}