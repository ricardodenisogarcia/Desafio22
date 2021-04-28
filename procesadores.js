exports.recibiendoDeLaTerminal = function recibiendo(enLaTerminal) {
  var posicionesAGuardar = enLaTerminal.length - 2;
  var primerRecorte = enLaTerminal.splice(2, posicionesAGuardar);
  return primerRecorte;
};

exports.limpiandoArray = function limpiandoArray(arrayALimpiar) {
  var arrayLimpio = arrayALimpiar.map(function (item) {
    return item.replace("--", "");
  });
  return arrayLimpio;
};

exports.creandoUnNuevoArray = function creandoUnNuevoArray(viejoArray) {
  var creandoCollections = viejoArray.map(function (item) {
    var posicionDelIndex = viejoArray.indexOf(item);
    if (posicionDelIndex % 2 == 0) {
      var nuevaCollections = [];
      nuevaCollections.push(
        viejoArray[posicionDelIndex],
        viejoArray[posicionDelIndex + 1]
      );
    }
    return nuevaCollections;
  });
  return creandoCollections;
};

exports.eliminandoUndefineds = function eliminandoUndefineds(
  listaConUndefineds
) {
  var listaADepurar = listaConUndefineds.filter(function (item) {
    return item;
  });
  return listaADepurar;
};

exports.arregloDefinitivo = function arregloDefinitivo(unaCollections) {
  var collectionsFinal = Object.fromEntries(unaCollections);
  return collectionsFinal;
};
