'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los
    siguientes métodos recursivos:

  - size: retorna la cantidad total de nodos del árbol.

  - insert: agrega un nodo en el lugar correspondiente.

  - contains: retorna true o false luego de evaluar si
    cierto valor existe dentro del árbol.

  - depthFirstForEach: recorre el árbol siguiendo el
    orden depth first (DFS) en cualquiera de sus
    variantes, según se indique por parámetro
    ("post-order", "pre-order", o "in-order").
    Nota: si no se provee ningún parámetro, hará el
    recorrido "in-order" por defecto.

  - breadthFirstForEach: recorre el árbol siguiendo el
    orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra
  representado en la imagen bst.png dentro del
  directorio homework.
*/
///////////////////////////////////////////////////////////
/*orden:
                           preguntar:
         si es menor?                        si es mayor?
   -> va a la izquierda
   -> pregunta si hay algo:
      -> Sí hay: preguntar si es menor?
            -> va a la izquierda
            -> pregunta si hay algo:
                  -> Sí hay: preguntar si es menor?
                        -> va a la izquierda
                        -> pregunta si hay algo:
                        .
                        .
                        .
                  -> No hay: inserto el valor
                                 en esa posición
      -> No hay: inserto el valor
                 en esa posición
*/
//////////////////////////////////////////////////////////////

function BinarySearchTree(value) {
   this.value = value;
   this.left = null;
   this.right = null;
}

BinarySearchTree.prototype.insert = function(valor){
   if(valor < this.value){
      if(this.left === null){
         this.left = new BinarySearchTree(valor);
      }
      else{
         this.left.insert(valor);
      }
   }
   
   if(valor > this.value){
      if(this.right === null){
         this.right = new BinarySearchTree(valor);
      }
      else{
         this.right.insert(valor);
      }
   }

}

BinarySearchTree.prototype.size = function(){
   if(this.left === null & this.right === null) return 1

   if(this.left !== null & this.right === null) return 1 + this.left.size()

   if(this.left === null & this.right !== null) return 1 + this.right.size()

   if(this.left !== null & this.right !== null) return 1 + this.left.size() + this.right.size()
}

BinarySearchTree.prototype.contains = function(buscar){
   if(buscar === this.value){
      return true;
   }

   if(buscar < this.value){
      if(this.left === null){
         return false;
      }
      else{
         return this.left.contains(buscar);
      }
   }

   if(buscar > this.value){
      if(this.right === null){
         return false;
      }
      else{
         return this.right.contains(buscar);
      }
   }
}

BinarySearchTree.prototype.depthFirstForEach = function(cb, orden){
   if(orden === 'pre-order'){
      cb(this.value) 
      if(this.left !== null) this.left.depthFirstForEach(cb, orden)
      if(this.right !== null) this.right.depthFirstForEach(cb, orden)
   }
   if(orden === 'post-order'){
      if(this.left !== null) this.left.depthFirstForEach(cb, orden)
      if(this.right !== null) this.right.depthFirstForEach(cb, orden)
      cb(this.value)
   }
   if(orden === 'in-order' || orden === undefined){
      if(this.left !== null) this.left.depthFirstForEach(cb, orden)
      cb(this.value)
      if(this.right !== null) this.right.depthFirstForEach(cb, orden)
   }
}

BinarySearchTree.prototype.breadthFirstForEach = function(cb, array=[]){
   cb(this.value); //define el nodo raiz

  if (this.left) array.push(this.left);   //pregunta si hay algo  a la izquierda y si hay, pushea ese valor al arreglo
  if (this.right) array.push(this.right); //pregunta si hay algo  a la derecha y si hay, pushea ese valor al arreglo

  if (array.length) array.shift().breadthFirstForEach(cb, array); //si hay algo en el array, quita el 1er elemento guardado y
}                                                                 // lo usa como cb para iniciar nuevamente el proceso con ese
                                                                  //valor. Mantiene los datos guardados en el array.

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
