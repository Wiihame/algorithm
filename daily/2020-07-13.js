/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 *
 * @description 给定两个数组，编写一个函数来计算它们的交集。
 */
var intersect = function (nums1, nums2) {
  const shortArr = nums1.length < nums2.length ? nums1 : nums2;
  const longArr = nums1.length >= nums2.length ? nums1 : nums2;
  let map = new Map();
  shortArr.map((i) => {
    if (map.has(i)) {
      map.set(i, map.get(i) + 1);
    } else {
      map.set(i, 0);
    }
  });
  let result = [];
  longArr.map((i) => {
    if (map.get(i) >= 0) {
      result.push(i);
      map.set(i, map.get(i) - 1);
    }
  });
  return result;
};

console.log(intersect([1, 2, 2, 1], [2, 2]));
