var procesadores = require("./procesadores.js");

var textoAEvaluar = process.argv;
console.log("----------------------------------------------");
console.log("TEXTO ORIGINAL");
console.log("----------------------------------------------");
console.log(textoAEvaluar);
console.log("----------------------------------------------");
console.log("PRIMER RECORTE");
console.log("----------------------------------------------");
var segundoArray = procesadores.recibiendoDeLaTerminal(textoAEvaluar);
console.log(segundoArray);
console.log("----------------------------------------------");
console.log("LIMPIANDO ARRAY");
console.log("----------------------------------------------");
var arrayLimpiado = procesadores.limpiandoArray(segundoArray);
console.log(arrayLimpiado);
console.log("----------------------------------------------");
console.log("NUEVO ARRAY");
console.log("----------------------------------------------");
var nuevaCollections = procesadores.creandoUnNuevoArray(arrayLimpiado);
var nuevaCollectionsBis = procesadores.eliminandoUndefineds(nuevaCollections);
console.log(nuevaCollectionsBis);
console.log("----------------------------------------------");
console.log("RESULTADO FINAL");
console.log("----------------------------------------------");
var resultadoFinal = procesadores.arregloDefinitivo(nuevaCollectionsBis);
console.log(resultadoFinal);
function main() {}

main();
