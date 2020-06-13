/**
 * @description Input a calculate string and output it's result
 * @example input: '(1+((2+3)*4)/2)'  output: 21
 * @param {string} str
 * @return {number}
 */

var doubleStackCalculate = function (str) {
  var inputArr = str.split("");
  var operators = [];
  var numbers = [];
  var operatorsMap = ["+", "-", "*", "/"];
  var rightBracket = ")";

  function calculateArr() {
    var right = numbers.pop();
    var left = numbers.pop();
    var operator = operators.pop();
    numbers.push(calculate(operatorsMap.indexOf(operator), left, right));
  }

  function calculate(index, a, b) {
    switch (index) {
      case 0:
        return a + b;
      case 1:
        return a - b;
      case 2:
        return a * b;
      case 3:
        return a / b;
      default:
        break;
    }
  }

  inputArr.map((i, idx) => {
    if (operatorsMap.includes(i)) {
      operators.push(i);
    }
    if (!isNaN(parseInt(i))) {
      numbers.push(parseInt(i));
    }
    if (i === rightBracket && numbers.length >= 2 && operators.length > 0) {
      calculateArr();
    } else {
      return false;
    }
  });
  if (numbers.length == 2 && operators.length == 1) {
    calculateArr();
  }

  return numbers[numbers.length - 1];
};

console.log(doubleStackCalculate("(1+((2+3)*4)/2)"));
