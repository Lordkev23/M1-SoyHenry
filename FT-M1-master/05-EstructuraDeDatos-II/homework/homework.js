'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el
     caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad:
     el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo
     cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al
     ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro
   un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() {
  this.head = null;
  this._length = 0;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

//add
LinkedList.prototype.add = function(valor){
  var nodo = new Node(valor);
  var current = this.head;
  // Si this.head está vacio
  if(!current) {
    this.head = nodo; //se le agrega el nodo
    this._length++;
    return nodo;
  }
  // Mientras en current.next que es this.head.next halla un valor, recorro el bucle hasta encontrar el último
  while(current.next){      //recorriendo el objeto
    current = current.next; //se sobrescribe 
  }
  current.next = nodo;   //enlazo current.next con el nodo
  this._length++;
  return nodo;
}
//remove
LinkedList.prototype.remove = function(){
  let current = this.head;

  //lista vacía:
  if(!current) return null;

  //lista de un solo nodo (tiene solo al head):
  if(!current.next){
    let auxiliar1 = this.head.value;//guardo la referencia antes de elminarla
    this.head = null;
    this._length--;
    return auxiliar1;
  }
  //elimina ultimo nodo de la lista y lo retorna:
  while(current.next.next){//visualiza si hay un ultimo nodo
    current = current.next;//current se mueve a su next
  }
    //cuando llega al penultimo nodo:
  let auxiliar2 = current.next.value;//guardo la referencia antes de elminarla
  current.next = null;
  return auxiliar2;
}
//search
LinkedList.prototype.search = function(input){
//recibe parametro y lo busca en la lista: parametro === valor || parametro === calback
  let current = this.head;
  while(current){
    if(typeof input === 'function'){   //si input es una funcion
      if(input(current.value)) return current.value; //retorna el valor que se le está pasando
    }
    else{                             //de lo contrario, si input es una string
      if(current.value === input) return current.value; //rertorna ese valor
    }
    current = current.next; //me desplazo al siguiente nodo
  }
  return null; //si llego al final y no encuentro lo que buscaba,retorno null
}

/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores,
   o casilleros; es decir, posiciones posibles para almacenar la información), donde
   guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber
   pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la
   clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un
     input alfabético, suma el código numérico de cada caracter del input (investigar el
     método charCodeAt de los strings) y calcula el módulo de ese número total por la
     cantidad de buckets; de esta manera determina la posición de la tabla en la que se
     almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave
     invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket
     correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla
     con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo
         chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora';
         luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en
         un bucket específico (determinado al hashear la clave)
*/
function HashTable() {
  this.numBuckets = 35; //cantidad de buckets
  this.buckets = [];
}

HashTable.prototype.hash = function(key){
  let acumulador = 0;
  for(const character of key){
    const numero = character.charCodeAt();
    acumulador += numero;
  }
  return acumulador % this.numBuckets;
}

HashTable.prototype.set = function(key, value){
  if(typeof key !== 'string') throw TypeError('Keys must be strings');
  const index = this.hash(key);
  if(!this.buckets[index]){   //si no existe un objeto en this.buckets
    this.buckets[index] = {}; //lo creo
  }
  this.buckets[index][key] = value; //si existe this.buckets[index],
}                   //le agrego la variable key con su valor value

HashTable.prototype.get = function(key){
  const index = this.hash(key);
  const bucket = this.buckets[index];
  if(bucket){
    return bucket[key];
  }
  else{
    return null;
  }
}

HashTable.prototype.hasKey = function(key){
  if(this.get(key)){
    return true;
  }
  else{
    return false;
  }
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
