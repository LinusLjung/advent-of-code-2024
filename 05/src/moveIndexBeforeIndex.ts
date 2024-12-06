export function moveIndexBeforeIndex<T>(fromIndex: number, beforeIndex: number, list: T[]): T[] {
  let newList = [...list.slice(0, fromIndex), ...list.slice(fromIndex + 1)];

  newList = [...newList.slice(0, beforeIndex), list[fromIndex], ...newList.slice(beforeIndex)];

  return newList;
}
