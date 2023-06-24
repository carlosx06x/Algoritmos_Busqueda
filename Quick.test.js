const quickSort = require('./QuickSort');

describe('Quick Sort', () => {
  test('Sorts an unsorted array', () => {
    const arr = [4, 2, 7, 1, 9];
    quickSort(arr, 0, arr.length - 1);
    expect(arr).toEqual([1, 2, 4, 7, 9]);
  });

  test('Keeps an already sorted array intact', () => {
    const arr = [1, 2, 4, 7, 9];
    quickSort(arr, 0, arr.length - 1);
    expect(arr).toEqual([1, 2, 4, 7, 9]);
  });

  test('Handles an empty array', () => {
    const arr = [];
    quickSort(arr, 0, arr.length - 1);
    expect(arr).toEqual([]);
  });

  test('Sorts a reverse ordered array', () => {
    const arr = [9, 7, 4, 2, 1];
    quickSort(arr, 0, arr.length - 1);
    expect(arr).toEqual([1, 2, 4, 7, 9]);
  });
});
