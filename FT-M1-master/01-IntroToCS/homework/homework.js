'use strict';

function BinarioADecimal(num) {
   //usando parseInt():
   /*var numeroACambiar = num;
   var numeroDecimal = parseInt(numeroACambiar, 2);
   return numeroDecimal;*/
   //
   //usando .split + for:
   /*var digito = num.split('');
   var decimal = 0;
   for(var i = 0; i < digito.length; i++){
      decimal += digito[i] * 2 ** (digito.length-1 -i);
   }*/
   //
   //usando .split + .reverse + for:
   /*let binario = num.split('').reverse();
   let resultado = 0;
   for(let i=0; i<binario.length; i++){
      let decimal = ((2**[i])*binario[i]);
      resultado += decimal
   }
   return resultado;*/
   //
   //usando .map + .reduce
   /*var digits = num.split('').reverse();
   return digits.map((digit, index) => digit * 2 ** index).reduce((total, currentValue) => total + currentValue)
   */
   //
   //usando bucle for:
   var operacion1 = 0;
   for(var i = 0; i < num.length; i++){
      operacion1 += num[i] * (2 ** (num.length-1 - i));
   }
   return operacion1;
}

function DecimalABinario(num) {
   //usando toString():
   /*var numeroACambiar = num;
   var numeroBinario = numeroACambiar.toString(2);
   return numeroBinario;*/
   //
   //usando bucle for:
   /*for(var i = 0; i < num.length; i++){
      num[i] % 2
   }*/
   //presenta errores, falta coregir
   //
   //usando while:
   /*let binary = '';
   while (num > 0){
      binary =  (num % 2).toString() + binary;
      num = Math.floor(num/2);
   }
   return binary;*/
   //
   //usando Do While:
   var arr = [];
   var numeroVacio = num;
   do {
      arr.unshift(numeroVacio % 2);
      numeroVacio = Math.floor(numeroVacio/2);
   } while (numeroVacio != 0);
   return arr.join('');
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
