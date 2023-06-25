const mergeSort = require('./MergeSort.js');

describe('Merge Sort', () => {
  test('Ordena una matriz sin ordenar', () => {
    const arreglo = [4, 2, 7, 1, 9];
    const sortedArr = mergeSort(arreglo);
    expect(sortedArr).toEqual([1, 2, 4, 7, 9]);
  });

  test('Mantiene intacta una matriz ya ordenada', () => {
    const arreglo = [1, 2, 4, 7, 9];
    const sortedArr = mergeSort(arreglo);
    expect(sortedArr).toEqual([1, 2, 4, 7, 9]);
  });

  test('Maneja una matriz vacía', () => {
    const arreglo = [];
    const sortedArr = mergeSort(arreglo);
    expect(sortedArr).toEqual([]);
  });

  test('Ordena una matriz ordenada inversa', () => {
    const arreglo = [9, 7, 4, 2, 1];
    const sortedArr = mergeSort(arreglo);
    expect(sortedArr).toEqual([1, 2, 4, 7, 9]);
  });
});
