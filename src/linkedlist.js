import Node from './node';

export default class Linkedlist {
  constructor() {
    this.head = undefined;
    this.tail = undefined;
    this.length = 0;
  }

  add(data) {
    const newNode = new Node(data);

    if (this.head === undefined) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length = this.length + 1;
    return newNode;
  }

  addFirst(data) {
    let node = new Node(data);
    if (this.head) {
      node.next = this.head;
      this.head = node;
    } else {
      this.head = node;
      this.tail = this.head;
    }
  } 

  remove(data) {
    if (this.head.data === data) {
      this.head = this.head.next;
      this.length = this.length - 1;
    } else {
      let prevNode = this.head;
      let node = prevNode.next;
      while(node) {
        if (node.data === data) {
          prevNode.next = node.next; 
          this.length = this.length - 1;
          return;
        }
      }
    }
  }

  forEach(callback) {
    let node = this.head;
    while (node) {
      callback(node);
      node = node.next;
    }
  }
}
