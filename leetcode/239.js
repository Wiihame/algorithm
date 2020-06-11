/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// 未通过

var maxSlidingWindow = function (nums, k) {
  var result = [];
  var window = [];

  if (nums.length === 0) {
    return nums;
  }

  nums.map((item) => {
    while (nums[nums.length - 1] < item) {
      window.pop();
    }
    window.push(item);

    // window slide from first number
    var current = i + 1 - k;

    if (current >= 0) {
      // first number is the largest
      result.push(window[0]);
      if (nums[current] === window[0]) {
        window.shift();
      }
    }
  });
  return result;
};
