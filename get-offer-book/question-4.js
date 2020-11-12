/**
 * @description 替换字符串内的空格为 %20
 * @param {string} str
 * @returns {string}
 *
 * 当前实现时间复杂度为n,空间复杂度为n
 * **/

var replaceSpace = function (str) {
  let strArr = str.split("");
  let result = [];
  strArr.map((i) => {
    if (i === " ") {
      result.push("%20");
    } else {
      result.push(i);
    }
  });
  return result.join("");
};

console.log(replaceSpace("We are  the   champion"));
