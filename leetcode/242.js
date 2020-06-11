/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// 解题关键：字母字数统计
var isAnagram = function (s, t) {
  var getMapStr = (str) => {
    var map = Array(26).fill(0);
    var lectureMap = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    str.split("").map((i) => {
      var idx = lectureMap.indexOf(i);
      if (map[idx]) {
        map[idx]++;
      } else {
        map[idx] = 1;
      }
    });

    return map.join("");
  };

  return getMapStr(s) == getMapStr(t);
};

console.log(isAnagram("art", "tas"));
