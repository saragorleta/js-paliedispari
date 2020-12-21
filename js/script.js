
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


var numeroUtente=parseInt(prompt('inserisci un numero da 1 a 5'));//utente inserisce un numero da 1 a 5
var numeroComputer=numeroRandom (1, 5);//il computer genera un numero da 1 a 5
var somma= numeroUtente+numeroComputer;// creo una var somma
//ho sommato i due numeri
console.log(numeroUtente+numeroComputer);

if(verificaPari(somma)){
  console.log('la somma risulta essere un numero pari');
}
else{
  console.log('la somma risulta essere un numero dispari');
}

//ho creato la funzione per generare  numeri random
function numeroRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
//ho creato una funzione per verificare se la somma dei numeri è pari o dispari
function verificaPari(somma){
  if(somma % 2 == 0){
  return true;
}
  return false;
}



    console.log('il numero sommato è pari');
  }
}
