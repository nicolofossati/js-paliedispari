/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/ 

//scegliere pari o dispari
let cond1 = false;
let pd = "";
while(!cond1){
    pd = prompt("Scegli e digita \"pari\" o \"dispari\"");
    if(pd=="pari" || pd=="dispari"){
        cond1 = true;
    }
}

//scegliere numero compreso tra 1 e 5
let cond2 = false;
let input = "";
while(!cond2){
    input =  parseInt(prompt("Scegli un numero da 1 a 5 compresi"));
    if((input>=1) && (input<=5)){
        cond2 = true;
    }
}

//Genera un numero compreso tra 1 e 5
