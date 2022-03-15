/*Crea due array che hanno un numero di elementi diversi.
 Aggiungi elementi casuali all’array che ha meno elementi, fino a quando ne avrà tanti quanti l’altro.*/

const array1 = [2, 3, 'peppe',  8, 12, 5] ;

const array2 = [3, 'robin', 6, 2,];

let minore2;

if (array1.length < array2.length){
  console.log('array1 < array2');
  minore2 = array1;

} else {
  console.log('array2 < o = a array1');
  minore2 = array2;

} 
  

while(array1.length !== array2.length){

  minore2.push('casuale');

}