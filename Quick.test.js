const quickSort = require('./QuickSort');

describe('Quick Sort', () => {
  test('Ordena una matriz sin ordenar', () => {
    const arreglo = [4, 2, 7, 1, 9];
    quickSort(arreglo, 0, arreglo.length - 1);
    expect(arreglo).toEqual([1, 2, 4, 7, 9]);
  });

  test('Mantiene intacta una matriz ya ordenada', () => {
    const arreglo = [1, 2, 4, 7, 9];
    quickSort(arreglo, 0, arreglo.length - 1);
    expect(arreglo).toEqual([1, 2, 4, 7, 9]);
  });

  test('Maneja una matriz vacía', () => {
    const arreglo = [];
    quickSort(arreglo, 0, arreglo.length - 1);
    expect(arreglo).toEqual([]);
  });

  test('Ordena una matriz ordenada inversa', () => {
    const arreglo = [9, 7, 4, 2, 1];
    quickSort(arreglo, 0, arreglo.length - 1);
    expect(arreglo).toEqual([1, 2, 4, 7, 9]);
  });
});
