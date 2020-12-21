
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// se l'utente sceglie dispari e la somma è dispari ha vinto
// se l'utente sceglie pari e la somma è pari ha vinto

var sceltaUtente= prompt('scegli pari o dispari');
var numeroUtente=parseInt(prompt('inserisci un numero da 1 a 5'));//utente inserisce un numero da 1 a 5
var numeroComputer=numeroRandom (1, 5);//il computer genera un numero da 1 a 5
var somma= numeroUtente+numeroComputer;// creo una var somma
var isPari=verificaPari(somma);// creo una var isPari. la var isPari corrisponde alla funzione verificaPari(somma)

//ho sommato i due numeri
console.log(numeroUtente+numeroComputer);

if(isPari==true && sceltaUtente=='pari'){
  //se è pari quindi true e se la scelta dell'utente è stata pari
  console.log('la somma risulta essere un numero pari quindi hai vinto');
}
else if (isPari==false && sceltaUtente=='dispari'){
  console.log('la somma risulta essere un numero dispari quindi hai vinto');
}
//dobbiamo dichiarare chi ha vinto
//tutto questo si potrebbe scrivere con la forma contratta:
//else {
//console.log('Hai perso');
// ma per capire meglio mettiamo la forma completa:

else if(isPari==true && sceltaUtente=='dispari'){
  console.log('la somma risulta essere un numero pari hai perso');
}
else if(isPari==false && sceltaUtente=='pari'){
  console.log('la somma risulta essere un numero dispari, hai perso');
}

//***FUNZIONI***
//ho creato la funzione per generare  numeri random
function numeroRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
//ho creato una funzione per verificare se la somma dei numeri è pari o dispari
function verificaPari(somma){
  if(somma % 2 == 0){
    return true;
  }
  return false;
}

console.log('il numero sommato è pari');
