
// Algoritmo de búsqueda binaria
function busquedaBinaria(lista, valor) {
    let inicio = 0;
    let fin = lista.length - 1;
    
    while (inicio <= fin) {
      let medio = Math.floor((inicio + fin) / 2);
      
      if (lista[medio] === valor) {
        return medio; // El valor se encuentra en el medio
      } else if (lista[medio] < valor) {
        inicio = medio + 1; // El valor está en la mitad superior
      } else {
        fin = medio - 1; // El valor está en la mitad inferior
      }
    }
    
    return -1; // El valor no se encuentra en la lista
  }


  module.exports = busquedaBinaria;