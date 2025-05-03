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

  const handleClick = () => {
    dispatch(setPosition({ row, column }));
  }

  return (
    <div className={clsx(classes.cell, classes[color])} onClick={handleClick}>
      {knightRow === row && knightColumn === column && <Knight />}
    </div>
  );
}
