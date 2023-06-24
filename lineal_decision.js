
// Algoritmo de búsqueda lineal
function busquedaLineal(lista, valor) {
  let encontrado = false;
  let indice = -1;

  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === valor) {
      encontrado = true;
      indice = i;
      break;
    }
  }

  return { encontrado, indice };
}
