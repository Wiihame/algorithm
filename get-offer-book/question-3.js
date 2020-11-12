/**
 * @description 在ｎ行ｎ列从左到右，从上到下递增的二维数组中的查找是否存在目标数，有的话返回概述的横竖坐标［ｘ, y］
 * @param {number[]} arr
 * @param {number} target
 * @returns {boolean|number[]} false | index
 *
 * @method 思路: 从举证右上角往左下两个方向找,利用矩阵的特性整行整列去排除
 * **/

var find = function (arr, target) {
  const row = arr.length - 1;
  const column = row;
  let currRow = row;
  let currColumn = 0;

  while (currRow >= 0 && currColumn <= column) {
    if (arr[currRow][currColumn] == target) {
      return [currRow, currColumn];
    }
    if (arr[currRow][currColumn] < target) {
      currColumn++;
    } else {
      currRow--;
    }
  }
};

let testArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(find(testArr, 8));
