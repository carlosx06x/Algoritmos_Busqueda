
// Pruebas de cobertura de condición
describe('Pruebas de cobertura de condición para la búsqueda en texto', () => {
    test('Buscar una subcadena existente en el texto', () => {
      const texto = 'Se escriben casos de prueba suficientes para que cada ';
      const subcadena = 'decision';
      const resultado = buscarTexto(texto, subcadena);
      expect(resultado).toBe(6); // Esperamos que la subcadena se encuentre en el índice 6
    });
  
    test('Buscar una subcadena inexistente en el texto', () => {
      const texto = 'Se escriben casos de prueba suficientes para que cada condición';
      const subcadena = 'sentencia';
      const resultado = buscarTexto(texto, subcadena);
      expect(resultado).toBe(-1); // Esperamos que la subcadena no se encuentre y el resultado sea -1
    });
  
    test('Buscar una subcadena en un texto vacío', () => {
      const texto = '';
      const subcadena = 'sentencia';
      const resultado = buscarTexto(texto, subcadena);
      expect(resultado).toBe(-1); // Esperamos que el texto esté vacío y el resultado sea -1
    });
  
    test('Buscar una subcadena vacía en el texto', () => {
      const texto = 'TÉCNICAS DE CONTROL DE FLUJO';
      const subcadena = '';
      const resultado = buscarTexto(texto, subcadena);
      expect(resultado).toBe(-1); // Esperamos que la subcadena esté vacía y el resultado sea -1
    });
  
    test('Buscar una subcadena más larga que el texto', () => {
      const texto = 'TÉCNICAS DE CAJA BLANCA';
      const subcadena = 'TÉCNICAS DE CAJA BLANCA PARA PRUEBAS UNITARIAS';
      const resultado = buscarTexto(texto, subcadena);
      expect(resultado).toBe(-1); // Esperamos que la subcadena sea más larga y el resultado sea -1
    });

  });


  