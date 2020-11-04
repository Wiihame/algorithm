/**
 * @name Quick Sort
 * @description
 *  https://segmentfault.com/a/1190000015488549
 *  https://www.ruanyifeng.com/blog/2011/04/quicksort_in_javascript.html
 *
 * **/

/**
 * @description 占用内存较多的版本
 * **/
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr
  }
  let privotIndex = Math.floor(arr.length / 2)
  let privot = arr.splice(privotIndex, 1)[0]
  let left = []
  let right = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < privot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([privot], quickSort(right))
}
