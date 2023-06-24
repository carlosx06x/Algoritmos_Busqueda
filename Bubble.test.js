const bubbleSort = require('./BubbleSort');

// La prueba verifica si el algoritmo ordena correctamente un arreglo desordenado.
describe('Bubble Sort', () => {
  test('Sorts an unsorted array', () => {
    const arr = [4, 2, 7, 1, 9];
    bubbleSort(arr);
    expect(arr).toEqual([1, 2, 4, 7, 9]);
  });
  // La prueba verifica si el algoritmo mantiene intacto un arreglo que ya está ordenado.
  test('Keeps an already sorted array intact', () => {
    const arr = [1, 2, 4, 7, 9];
    bubbleSort(arr);
    expect(arr).toEqual([1, 2, 4, 7, 9]);
  });
  // La prueba asegura que el algoritmo maneje correctamente un arreglo vacío.
  test('Handles an empty array', () => {
    const arr = [];
    bubbleSort(arr);
    expect(arr).toEqual([]);
  });
  // La prueba verifica si el algoritmo ordena correctamente un arreglo en orden descendente.
  test('Sorts a reverse ordered array', () => {
    const arr = [9, 7, 4, 2, 1];
    bubbleSort(arr);
    expect(arr).toEqual([1, 2, 4, 7, 9]);
  });
});
