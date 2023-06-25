const buscarDFS = require('./busqueda_profundida');


// Pruebas de cobertura de condición para búsqueda en profundidad
describe('Pruebas de cobertura de condición para búsqueda en profundidad', () => {
  test('Buscar ruta existente en un grafo', () => {
    const grafo = {
      A: ['B', 'C'],
      B: ['D'],
      C: ['D'],
      D: ['E'],
      E: []
    };

    const encontrado = buscarDFS(grafo, 'A', 'E');
    expect(encontrado).toBe(true); // Esperamos que se encuentre una ruta
  });

  test('Buscar ruta inexistente en un grafo', () => {
    const grafo = {
      A: ['B', 'C'],
      B: ['D'],   
      C: ['D'],
      D: ['E'],
      E: []
    };

    const encontrado = buscarDFS(grafo, 'A', 'F');
    expect(encontrado).toBe(false); // Esperamos que no se encuentre una ruta
  });
});