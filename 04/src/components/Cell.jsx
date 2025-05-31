import classes from './Cell.module.css';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { setPosition } from '../store/reducers/KnightSlice';
import { Knight } from './Knight';

export const Cell = ({ column, row }) => {
  const dispatch = useDispatch();
  const knightRow = useSelector((state) => state.knight.row);
  const knightColumn = useSelector((state) => state.knight.column);

  const color = (column % 2 === row % 2) ? 'white' : 'black';

  const isValidMove = (newRow, newCol) => {
    const rowDiff = Math.abs(newRow - knightRow);
    const colDiff = Math.abs(newCol - knightColumn);
    return (rowDiff === 2 && colDiff === 1) || (rowDiff === 1 && colDiff === 2);
  };

  const handleClick = () => {
    if (isValidMove(row, column)) {
      dispatch(setPosition({ row, column }));
    }
  };

  return (
    <div
      className={clsx(classes.cell, classes[color])}
      onClick={handleClick}
    >
      {knightRow === row && knightColumn === column && <Knight />}
    </div>
  );
};
