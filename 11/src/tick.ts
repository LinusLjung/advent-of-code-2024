import type LinkedList from 'LinkedList';

export function tick(list: LinkedList<number>) {
  for (const item of list) {
    if (item.value === 0) {
      item.value = 1;
      continue;
    }

    const stringValue = item.value.toString();

    if (stringValue.length % 2 === 0) {
      const newItem: typeof item = {
        next: item,
        prev: item.prev,
        value: Number(stringValue.slice(0, stringValue.length / 2)),
      };

      if (newItem.prev) {
        newItem.prev.next = newItem;
      } else {
        list.start = newItem;
      }

      item.prev = newItem;
      item.value = Number(stringValue.slice(stringValue.length / 2));
      continue;
    }

    item.value = item.value * 2024;
  }

  return list;
}
