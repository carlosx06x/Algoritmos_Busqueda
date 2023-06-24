
// Pruebas de cobertura de caminos
describe('Pruebas de cobertura de caminos para el algoritmo de búsqueda de costo uniforme', () => {
    test('Buscar el camino más corto en un grafo con varios caminos', () => {
      const grafo = {
        A: [{ nodo: 'B', costo: 1 }, { nodo: 'C', costo: 2 }],
        B: [{ nodo: 'D', costo: 3 }],
        C: [],
        D: []
      };
      const costo = buscarCostoUniforme(grafo, 'A', 'D');
      expect(costo).toBe(4); // Esperamos que el costo del camino más corto sea 4
    });
  
    test('Buscar el camino más corto en un grafo sin camino válido', () => {
      const grafo = {
        A: [{ nodo: 'B', costo: 1 }],
        B: [],
        C: []
      };
      const costo = buscarCostoUniforme(grafo, 'A', 'C');
      expect(costo).toBe(-1); // Esperamos que no se encuentre un camino válido y el costo sea -1
    });
  
    test('Buscar el camino más corto en un grafo con un solo nodo', () => {
      const grafo = {
        A: []
      };
      const costo = buscarCostoUniforme(grafo, 'A', 'A');
      expect(costo).toBe(0); // Esperamos que el costo sea 0, ya que el nodo inicial y final son el mismo
    });
  });