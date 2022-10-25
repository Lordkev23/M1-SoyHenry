//
// 6️⃣ ***** EJERCICIO 6 ***** - sortPrimeHouses() 6️⃣
// 
// Implementar un algoritmo de ordenamiento, que además de ordenar un array de menor a mayor,
// retorne false si un número dentro del array no es primo
// EJEMPLOS:
// Dado el siguiente array:
// [25, 3, 6, 8, 5, 12, 9, 18, 11, 7]
// sortPrimeHouses() retorna => false (porque 25 por ejemplo, no es primo)
//
// Dado este otro array:
// [61, 7, 13, 11, 29, 3]
// sortPrimeHouses() retorna => [3, 7, 11, 13, 29, 61]
//⚠️ ATENCION ⚠️
// NO utilizar el método sort() de Array!
// REQUISITOS:
//  🟢 Aplicar un algoritmo de ordenamiento de menor a mayor
//  🟢 Si numuero dentro del array no es primo, retornar false

function sortPrimeHouses(array) {
  // Tu código aquí:
  let primo = function (num) {
    if (num === 0  ||  num === 4) return false;
    for (let i = 2; i < num / 2; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  function laBurbujita(array) {
    var onOff = true;
    while (onOff) {
      onOff = false;
      for (let i = 0; i < array.length-1; i++) {
        if (array[i] > array[i+1]) {
          var auxiliar = array[i];
          array[i] = array[i+1];
          array[i+1] = auxiliar;
          onOff = true;
        }
      }
    }
    return array;
  }
  for (let i = 0; i < array.length; i++) {
    if (primo(array[i]) === false) {
      return false;
    }
  }
  let ordenada = laBurbujita(array);
  return ordenada;
}


// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  sortPrimeHouses
};