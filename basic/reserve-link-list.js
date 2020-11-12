var reserveLinkList = function (head) {
  let cur = head;
  let reservedHead = null;
  let prev = null;
  while (cur !== null) {
    let next = cur.next;
    if (next == null) reservedHead = next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return reservedHead;
};
