const mergeSort = require('./MergeSort.js');

describe('Merge Sort', () => {
  test('Sorts an unsorted array', () => {
    const arr = [4, 2, 7, 1, 9];
    const sortedArr = mergeSort(arr);
    expect(sortedArr).toEqual([1, 2, 4, 7, 9]);
  });

  test('Keeps an already sorted array intact', () => {
    const arr = [1, 2, 4, 7, 9];
    const sortedArr = mergeSort(arr);
    expect(sortedArr).toEqual([1, 2, 4, 7, 9]);
  });

  test('Handles an empty array', () => {
    const arr = [];
    const sortedArr = mergeSort(arr);
    expect(sortedArr).toEqual([]);
  });

  test('Sorts a reverse ordered array', () => {
    const arr = [9, 7, 4, 2, 1];
    const sortedArr = mergeSort(arr);
    expect(sortedArr).toEqual([1, 2, 4, 7, 9]);
  });
});
