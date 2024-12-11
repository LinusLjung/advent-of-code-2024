import type LinkedList from 'LinkedList';

export function collapseList(list: LinkedList<number>) {
  for (const item of list) {
    let next = item.next;

    while (next) {
      if (next.value === item.value) {
        item.multiplier += next.multiplier;
        next.prev!.next = next.next;

        if (next.next) {
          next.next.prev = next.prev;
        }
      }

      next = next.next;
    }
  }

  return list;
}
