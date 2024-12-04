import { KEYWORD } from "consts";

export function checkRow(row: string[], startIndex: number) {
  return row.slice(startIndex, startIndex + KEYWORD.length).join('') === KEYWORD;
}

export function checkRowReversed(row: string[], startIndex: number) {
  return (
    row
      .slice(startIndex + 1 - KEYWORD.length, startIndex + 1)
      .toReversed()
      .join('') === KEYWORD
  );
}
