'use strict';

// Closures

/* Ejercicio 1
La función counter debe retornar otra función. Esta función retornada debe actuar como un contador, retornando 
un valor numérico que empieza en 1 e incrementa con cada invocación.
EJEMPLO
const nuevoContador = counter()
nuevoContador()     // 1
nuevoContador()     // 2

const otroContador = counter()
otroContador()      // 1
otroContador()      // 2 */
function counter() {
  let resultado = 0;
  return function(){
    resultado += 1;
    return resultado;
    }
  }

  //---------------inicio de área de pruebas---------------
  const contador1 = counter();
  console.log(contador1());
  console.log(contador1());
  console.log(contador1());

  const contador2 = counter();
  console.log(contador2());
  console.log(contador2());
  console.log(contador1());
  console.log(contador2());

  let cuentamelo = contador2();
  console.log(cuentamelo);
  console.log(cuentamelo);
  console.log(contador2());

  console.log(counter()())
  console.log(counter()())
  console.log(counter()())
//---------------fin de área de pruebas---------------


/* Ejercicio 2
Tu tarea aquí es lograr, mediante un closure, que cacheFunction actúe como una memoria caché para el callback 
que recibe por parámetro (cb); es decir, que "recuerde" el resultado de cada operación que hace, de manera que, 
al realizar una operación por segunda vez, se pueda obtener el resultado de esa "memoria" sin tener que efectuar 
otra vez cálculos que ya se hicieron anteriormente.

- cacheFunction debe retornar una función. Esta función debe aceptar un argumento (arg) e invocar a cb con ese argumento;
 hecho eso, debe guardar el argumento junto con el resultado de la invocación (tip: usá un objeto donde cada propiedad sea
   el argumento, y su valor el resultado de la correspondiente invocación a cb) de manera que, la próxima vez que reciba
    el mismo argumento, no sea necesario volver a invocar a cb, porque el resultado estará guardado en la "memoria caché".

  Ejemplo:
  function square(n){
    return n * n
  }

  const squareCache = cacheFunction(square)

  squareCache(5)    // invocará a square(5), almacenará el resultado y lo retornará
  squareCache(5)    // no volverá a invocar a square, simplemente buscará en la caché cuál es el resultado de square(5) y
                    //   lo retornará (tip: si usaste un objeto, podés usar hasOwnProperty) */

function cacheFunction(cb) {
  var obj = {}
  return function(arg){           //retorna otra funcion por ser closure
    if(obj.hasOwnProperty(arg)){  //si existe arg en obj (memoria caché) se hace lo siguiente:
      return obj[arg];            //retorna el obj (memoria caché) con su respectivo clave : valor.
    } 
    else {                        //si no existe:
      obj[arg] = cb(arg)          //a obj (memoria caché) le estoy agregando una propiedad arg y tambien el valor, el cual va a ser el resultado de invocar a call back (cb) con ese arg
    return obj[arg];              //retorna el obj (memoria caché) con la clave : valor agregada previamente.
    }
  }
  /* forma simplificada:
  var obj = {};
  return function(arg){
  if(!obj.hasOwnProperty(arg)) obj[arg] = cb(arg);
  return obj[arg];
  };
  */
}


//----------------------------------------

// Bind

var instructor = {
   nombre: 'Franco',
   edad: 25,
};

var alumno = {
   nombre: 'Juan',
   curso: 'FullStack',
};

function getNombre() {
  return this.nombre;          //Me piden retornar el valor de la clave nombre de cualquiera de los 2 objetos dados
}

/*
  Ejercicio 3
  IMPORTANTE: no modificar el código de arriba (variables instructor y alumno, y función getNombre)
  Usando el método bind() guardar, en las dos variables declaradas a continuación, dos funciones que
   actúen como getNombre pero retornen el nombre del instructor y del alumno, respectivamente.
*/

let getNombreInstructor = getNombre.bind(instructor); //con .bind se está asociando el this con el objeto instructor

let getNombreAlumno = getNombre.bind(alumno);         //con .bind se está asociando el this con el objeto alumno

//---------------inicio de área de pruebas---------------
console.log(instructor.nombre)
console.log(getNombreInstructor())

console.log(alumno.nombre)
console.log(getNombreAlumno())
//---------------fin de área de pruebas---------------

/*
  Ejercicio 4
  Sin modificar la función crearCadena, usar bind para guardar, en las tres variables declaradas a continuación,
   tres funciones que retornen una cadena (string) y el delimitador especificado (asteriscos, guiones, y
   guiones bajos, respectivamente). Las funciones obtenidas deberían recibir solamente un argumento - la
   cadena de texto - ya que los otros argumentos habrán sido "bindeados". 
*/

function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena) {
  return delimitadorIzquierda + cadena + delimitadorDerecha;
}

let textoAsteriscos = crearCadena.bind(this,'*', '*');
let textoGuiones = crearCadena.bind(this, '-', '-');
let textoUnderscore = crearCadena.bind(this, '_', '_');

//---------------inicio de área de pruebas---------------
console.log(textoAsteriscos())

console.log(textoGuiones())

console.log(textoUnderscore())
//---------------fin de área de pruebas---------------

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   counter,
   cacheFunction,
   getNombreInstructor,
   getNombreAlumno,
   textoAsteriscos,
   textoGuiones,
   textoUnderscore,
};
