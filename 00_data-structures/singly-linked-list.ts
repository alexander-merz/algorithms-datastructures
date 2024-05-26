class ListNode<T> {
  public value: T;
  public next: ListNode<T> | undefined;

  constructor(value: T) {
    this.value = value;
    this.next = undefined;
  }

  static from<T extends any>(subject: T | ListNode<T>): ListNode<T> {
    return subject instanceof ListNode ? subject : new ListNode(subject);
  }
}

class SinglyLinkedList<T> {
  public get head(): ListNode<T> | undefined {
    return this._head;
  }

  public get tail(): ListNode<T> | undefined {
    return this._tail;
  }

  public get length(): number {
    return this._length;
  }

  private _head: ListNode<T> | undefined = undefined;
  private _tail: ListNode<T> | undefined = undefined;
  private _length: number = 0;

  get(targetIndex: number): T | undefined {
    if (targetIndex < 0 || this._length === 0 || targetIndex >= this._length) {
      return;
    }

    let currentNode: ListNode<T> | undefined = this._head!;
    let currentIndex = 0;

    while (currentIndex !== targetIndex) {
      if (currentNode == null) return;
      currentNode = currentNode?.next;
      currentIndex++;
    }

    return currentNode!.value;
  }

  insertHead(value: T): void {
    const node = ListNode.from(value);

    if (this._head == null) {
      this._head = this._tail = node;
    } else {
      node.next = this._head;
      this._head = node;
    }

    this._length++;
  }

  insertTail(value: T): void {
    const node = ListNode.from(value);

    if (this._tail == null) {
      this._head = this._tail = node;
    } else {
      this._tail.next = node;
      this._tail = node;
    }

    this._length++;
  }

  remove(targetIndex: number): boolean {
    if (targetIndex < 0 || this._length === 0 || targetIndex >= this._length) {
      return false;
    }

    let targetNode: ListNode<T> | undefined = this._head!;
    let previousNode: ListNode<T> | undefined;
    let currentIndex = 0;

    while (currentIndex !== targetIndex) {
      if (targetNode == null) return false;
      previousNode = targetNode;
      targetNode = targetNode?.next;
      currentIndex++;
    }
    if (previousNode) {
      previousNode.next = targetNode?.next;
    }
    if (targetNode === this._head) {
      this._head = targetNode!.next;
    }
    if (targetNode === this._tail) {
      this._tail = previousNode;
    }
    this._length--;
    return true;
  }

  getValues(): T[] {
    let values: T[] = [];
    let currentNode = this._head;
    while (currentNode != null) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return values;
  }
}
