/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
ex:
otto
aveva
*/
const input = prompt("Inserire una parola");

const h1Dom = document.querySelector('#title');
let output = "";

if(palindrome(input)){ //se true la parola è palindroma
    output = `è palindroma!`;
} else { // altrimenti NON lo è
    output = `NON è palindroma!`;
}
h1Dom.innerHTML = `La parola ${input} ${output}`;


function palindrome(input){
    let start = 0;
    let end = input.length-1;
    let cond = true;

    while((start < (input.length/2)) && cond){
        if(input[start] == input[end]){
            start++;
            end--;
        } else {
            cond = false;
        }
    }

    return cond;
}