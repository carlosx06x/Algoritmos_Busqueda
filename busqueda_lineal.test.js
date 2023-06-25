const busquedaLineal = require('./busqueda_lineal');

// Prueba de cobertura de decisiones
describe('Prueba de cobertura de decisiones para el algoritmo de búsqueda lineal', () => {
  test('Buscar un valor existente en la lista', () => {
    const lista = [2, 4, 6, 8, 10];
    const valorBuscado = 6;
    const resultado = busquedaLineal(lista, valorBuscado);
    expect(resultado.encontrado).toBe(true); // Esperamos que el resultado sea true indicando que se encontró el valor
    expect(resultado.indice).toBe(2); // Esperamos que el resultado sea el índice 2
  });

  test('Buscar un valor inexistente en la lista', () => {
    const lista = [2, 4, 6, 8, 10];
    const valorBuscado = 5;
    const resultado = busquedaLineal(lista, valorBuscado);
    expect(resultado.encontrado).toBe(false); // Esperamos que el resultado sea false indicando que no se encontró el valor
    expect(resultado.indice).toBe(-1); // Esperamos que el resultado sea -1 indicando que no se encontró el valor
  });

});
