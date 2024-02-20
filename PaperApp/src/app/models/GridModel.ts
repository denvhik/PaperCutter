import { Cell } from './CellModel';

export interface GridModel {
  M: number;
  N: number;
  Grid: Cell[][];
}