/**
 * @description Quick Sort
 * @param {number[]} arr
 * @return {number[]}
 */

var quickSort = function (input) {
  if (input.length <= 1) {
    return input;
  }
  var left = [];
  var right = [];
  var current = input.splice(0, 1);

  for (let i = 0; i < input.length; i++) {
    if (input[i] < current) {
      left.push(input[i]);
    } else {
      right.push(input[i]);
    }
  }
  return quickSort(left).concat([current], quickSort(right));
};

var test = [7, 3, 1, 2, 9, 7, 4, 6, 10];
quickSort(test);
console.log(test);
