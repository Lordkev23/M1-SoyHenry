'use strict';

// EJERCICIO 1
function nFactorial(n) {
   if (n === 1 || n === 0){   //retorna 1 porque factorial de 0 (0!) es 1 y factorial de
      return 1;            // 1 (1!) tambien es 1
   } 
   else if((n < 0) ){      //retorna 0 porque no existe factorial de un numero negativo
      return 0;
   } 
   return n * nFactorial(n - 1); 
}
//---------------inicio de área de pruebas---------------
console.log(1 * nFactorial(0))
console.log(2 * nFactorial(1))

console.log(0 * nFactorial(-1))
console.log(-1 * nFactorial(-2))
console.log(-1 * nFactorial(-2))

console.log(4 * nFactorial(3))
console.log(5 * nFactorial(4))
console.log(8 * nFactorial(7))
//---------------fin de área de pruebas---------------

// EJERCICIO 2
function nFibonacci(n) {   //n es posicion
   if(n < 0){
      return 'no hay fibonacci de un numero negativo';
   }
   if(n === 0 || n === 1){
      return n;
   }
   
    return nFibonacci(n-2) + nFibonacci(n-1); 
}

//---------------inicio de área de pruebas---------------
console.log(nFibonacci(2))
console.log(nFibonacci(6))
console.log(nFibonacci(0))
console.log(nFibonacci(12))
console.log(nFibonacci(-1))

//nF=    1     1            2               3               5              8           13             21       34       55       89       144      233      377      610      987      1597
//n=     1     2            3               4               5              6             7            8        9       10       11       12       13       14       15       16
//                                                                      5 + 6 = 13

//       1     1
//---------------fin de área de pruebas---------------


// EJERCICIO 3
//Una Queue devuelve el primer dato ingresado, apila los demás datos que se ingresen y
// los va devolviendo por orden de llegada hasta alcanzar el ultimo dato y devolverlo.
//resuelto con prototype:
function Queue() { //quiwi
   this.cola = [];
}
Queue.prototype.enqueue = function(valor){
   return this.cola.push(valor);       //envia un valor al final del array cola
}
Queue.prototype.dequeue = function(){
   return this.cola.shift();           //retirar el 1er elemento del array cola
}
Queue.prototype.size = function(){
   return this.cola.length;            //nos permite visualizar la longitud de la cola
}

/*Resuelto como clase:
Class Queue {
   constructor(){
      this.cola = [];
   }
   enqueue(valor) {
      this.cola.push(valor);
   }
   dequeue() {
      return this.cola.shift();
   }
   size() {
      return this.cola.length;
   }
}
*/

//Ejercicio Extra para Pila:
//Una pila devuelve el ultimo dato ingresado, continua con el anterior a este y
// así sucesivamente hasta llegar al primer dato ingresado y devolverlo.
function Pila(){
   this.pila = [];
}
Pila.prototype.enPila = function(value){
   return this.pila.push(value);       //envia un valor al final del array cola
}
Pila.prototype.dePila = function(){
   return this.pila.pop();             //retirar el último elemento del array cola
}
Pila.prototype.sizePila = function(){
   return this.pila.length;            //nos permite visualizar la longitud de la cola
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
