
// Implementación de búsqueda en texto
function buscarTexto(texto, subcadena) {
    if (!texto || !subcadena) {
      return -1; // Verificar si el texto o la subcadena están vacíos
    }
  
    const textoLen = texto.length;
    const subcadenaLen = subcadena.length;
  
    if (subcadenaLen > textoLen) {
      return -1; // Verificar si la subcadena es más larga que el texto
    }
  
    for (let i = 0; i <= textoLen - subcadenaLen; i++) {
      let j;
      for (j = 0; j < subcadenaLen; j++) {
        if (texto[i + j] !== subcadena[j]) {
          break; // Verificar si hay una diferencia en los caracteres
        }
      }
  
      if (j === subcadenaLen) {
        return i; // Se encontró la subcadena en el texto
      }
    }
  
    return -1; // No se encontró la subcadena en el texto
  }

  module.exports = buscarTexto;