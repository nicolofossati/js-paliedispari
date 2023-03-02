/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/ 

let cond = false;

while(!cond){
    let input =  parseInt(prompt("Scegli un numero da 1 a 5 compresi"));
    if((input>=1) && (input<=5)){
        cond = true;
    } else {
        cond = false;
    }
}


