'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let array = [1];        //todo numero es divisible por 1, por eso se lo agrega defrente al array.
  let valorEnviado = 2;   //valor que se va a enviar al array.
  while(num !== 1){       //mientras que el numero recibido num sea diferente de 1, se repite el ciclo, si es uno, sale del bucle.
    if(num % valorEnviado === 0){ //si el modulo de num divido con valorEnviado es 0 
      array.push(valorEnviado);   // se pushea este valorEnviado al array, 
      num = num/valorEnviado;     // se divide num con valorEnviado y se guarda en num
    }
    else{                //si el modulo de num divido con valorEnviado es diferente de 0, se incrementa el
      valorEnviado++;   // valorEnviado en uno y este ciclo continua en un bucle hasta que el modulo de
    }                   // num divido con valorEnviado sea 0 y de esta manera valorEnviado sea pusheado
  }                     // al array.
  return array;  //se retorna el array con todos los factores por los cuales se a ido dividiendo num, osea
}                // retorna 1 y todos los valores de valorEnviado que fueron pusheados al array. 

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  //  [2, 3, 4, 5, 7, 8]
  //               ^--^
  // onOff = false
  // i = 4

  let onOff = true;
  while(onOff){
    onOff = false;
    for(var i = 0; i < array.length-1; i++){
      if(array[i] > array[i+1]){
        let auxiliar = array[i];
        array[i] = array[i+1];
        array[i+1] = auxiliar;
        onOff = true;
      }
    }
  }
  return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  //  [1, 3, 4, 5, 9]
  //               i
  //         h        
  // 
  // auxiliar = 5

  for(var i = 1; i < array.length; i++){
    let h = i-1;
    let auxiliar = array[i];
    while(h >= 0 && auxiliar < array[h]){
      array[h+1] = array[h];
      h--;
    }
    array[h+1] = auxiliar;
  }
  return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  //  [0, 1, 2, 6, 8, 9]
  //               i
  //                  j        
  // 
  //posicion: i = 4
  //posicion: min = 4
  //valor:    auxiliar = 9

  for(var i  = 0; i < array.length-1; i++){
    let min = i;
    for(var j = i+1; j < array.length; j++){
      if(array[min] > array[j]){
        min = j;
      }
    }
    if(i !== min){
      let auxiliar = array[i];
      array[i] = array[min];
      array[min] = auxiliar;
    }
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
