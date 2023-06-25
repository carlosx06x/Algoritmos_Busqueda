const bubbleSort = require('./BubbleSort');

// La prueba verifica si el algoritmo ordena correctamente un arreglo desordenado.
describe('Bubble Sort', () => {
  test('Ordena una matriz sin ordenar', () => {
    const arreglo = [4, 2, 7, 1, 9];
    bubbleSort(arreglo);
    expect(arreglo).toEqual([1, 2, 4, 7, 9]);
  });
  // La prueba verifica si el algoritmo mantiene intacto un arreglo que ya está ordenado.
  test('Mantiene intacta una matriz ya ordenada', () => {
    const arreglo = [1, 2, 4, 7, 9];
    bubbleSort(arreglo);
    expect(arreglo).toEqual([1, 2, 4, 7, 9]);
  });
  // La prueba asegura que el algoritmo maneje correctamente un arreglo vacío.
  test('Maneja una matriz vacía', () => {
    const arreglo = [];
    bubbleSort(arreglo);
    expect(arreglo).toEqual([]);
  });
  // La prueba verifica si el algoritmo ordena correctamente un arreglo en orden descendente.
  test('Ordena una matriz ordenada inversa', () => {
    const arreglo = [9, 7, 4, 2, 1];
    bubbleSort(arreglo);
    expect(arreglo).toEqual([1, 2, 4, 7, 9]);
  });
});
