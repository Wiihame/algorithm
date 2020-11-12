/**
 * @description Select sort
 * @param {number[]} arr
 * @return {number[]}
 */

var selectSort = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        var tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
      }
    }
  }
  return arr;
};

var test = [7, 3, 1, 2, 9, 7, 4, 6, 10];

console.log(selectSort(test));
