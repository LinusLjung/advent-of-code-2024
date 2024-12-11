import assert from 'assert';

type Item<T> = {
  prev: Item<T>;
  next: Item<T>;
  value: T;
  multiplier: number;
} | null;

class LinkedList<T> {
  start: Item<T> = null;

  constructor(initial?: T[]) {
    if (initial) {
      initial.forEach((value) => this.push(value));
    }
  }

  push(value: T) {
    if (!this.start) {
      this.start = {
        value,
        next: null,
        prev: null,
        multiplier: 1,
      };

      return;
    }

    let item: Item<T> = null;

    for (item of this) {
    }

    assert(item);

    item.next = {
      value,
      next: null,
      prev: item,
      multiplier: 1,
    };
  }

  get length() {
    return [...this].length;
  }

  *[Symbol.iterator]() {
    let item = this.start;

    if (!item) {
      return null;
    }

    yield item;

    while (item.next) {
      item = item.next;

      yield item;
    }
  }
}

export default LinkedList;
