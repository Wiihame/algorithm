/**
 * @description Binary Search
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */

var binarySearch = function (sourceArr, target) {
  var search = function (arr, target, low, high) {
    var n = Math.floor((low + high) / 2);
    var curr = arr[n];
    if (curr == target) {
      return n;
    } else if (target < curr) {
      search(arr, target, low - 1, n - 1);
    } else {
      search(arr, target, n + 1, high);
    }
  };
  return search(sourceArr, target, 0, sourceArr.length - 1);
};

console.log(binarySearch([1, 3, 4, 5, 6, 7], 5));
