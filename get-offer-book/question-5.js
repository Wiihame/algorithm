/**
 * @description 从尾到头打印链表
 * @param {LinkList} root
 * @returns {void}
 *
 * **/

function ListNode(data, next) {
  this.data = data;
  this.next = next;
}

var print = function (root) {
  if (!root.next) {
    return false;
  }
  let stack = [];
  let cur = root;
  while (cur.next) {
    stack.push(cur.data);
    cur = cur.next;
  }
  while (stack.length > 0) {
    console.log(stack[stack.length - 1]);
    stack.pop();
  }
};
