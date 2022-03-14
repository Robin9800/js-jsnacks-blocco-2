// Creo un array di numeri interi
const numbers = []; // [3, 6, 7, 8];

const lunghezza = Math.floor(Math.random()*10)+1;

for(let i = 0; i < lunghezza; i++){
  const randomNumber = Math.floor(Math.random()*10)+1;
  numbers.push(randomNumber);
}

console.log(numbers);

//  fai la somma di tutti gli elementi che sono in posizione dispari
let somma = 0;
for (let i = 0; i < numbers.length; i++){

 const modulo = i % 2;

 if (modulo!==0){ 
  somma = somma + numbers[i]; 
 }
}

console.log('la somma è', somma);