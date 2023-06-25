const busquedaBinaria = require('./busqueda_binaria');


// Prueba de cobertura de condiciones
describe('Prueba de cobertura de condiciones para el algoritmo de búsqueda binaria', () => {
    test('Buscar un valor existente en la lista', () => {
      const lista = [2, 4, 6, 8, 10];
      const valorBuscado = 6;
      const resultado = busquedaBinaria(lista, valorBuscado);
      expect(resultado).toBe(2); // Esperamos que el resultado sea el índice 2
    });
  
    test('Buscar un valor inexistente en la lista', () => {
      const lista = [2, 4, 6, 8, 10];
      const valorBuscado = 5;
      const resultado = busquedaBinaria(lista, valorBuscado);
      expect(resultado).toBe(-1); // Esperamos que el resultado sea -1 indicando que no se encontró el valor
    });
  
    test('Buscar en una lista vacía', () => {
      const lista = [];
      const valorBuscado = 5;
      const resultado = busquedaBinaria(lista, valorBuscado);
      expect(resultado).toBe(-1); // Esperamos que el resultado sea -1 indicando que no se encontró el valor
    });
  
    test('Buscar un valor en una lista con un solo elemento', () => {
      const lista = [10];
      const valorBuscado = 10;
      const resultado = busquedaBinaria(lista, valorBuscado);
      expect(resultado).toBe(0); // Esperamos que el resultado sea el índice 0
    });
  });