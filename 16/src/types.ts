import type { Cell } from 'Grid';

export type Direction = '^' | '>' | 'v' | '<';
export type Reindeer = { position: Cell; path: string[]; direction: Direction; prevDirection: Direction; cost: number };
