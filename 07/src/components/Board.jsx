import classes from './Board.module.css';
import { Cell } from './Cell';

const boardWidth = 7;

const range = () => {
  return Array(boardWidth).fill(0).map((_,i) => i);
}

//     * * *
//     * * *
// * * * * * * *
// * * *   * * *
// * * * * * * *
//     * * *
//     * * *
// 0 1 2 3 4 5 6

const renderRow = (row) => {
  return (
    <div className={classes.row}>
      {range().map((col) => <Cell row={row} col={col} />)}
    </div>
  )
}

export const Board = () => {
  return (
    <div className={classes.board}>
      {range().map((row) => renderRow(row))}
    </div>
  );
}
