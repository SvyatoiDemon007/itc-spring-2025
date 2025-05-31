import classes from './Cell.module.css';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { figuresSlice } from '../store/reducers/figures';
import { Knight } from './Knight';
import { Rook } from './Rook';

export const Cell = ({ column, row }) => {
  const dispatch = useDispatch();

  const knightPos = useSelector((state) => state.figures.knightPosition);
  const rookPos = useSelector((state) => state.figures.rookPosition);
  const currentFigure = useSelector((state) => state.figures.currentFigure);

  const isKnight = knightPos.row === row && knightPos.column === column;
  const isRook = rookPos.row === row && rookPos.column === column;

  const isValidKnightMove = () => {
    const dx = Math.abs(knightPos.column - column);
    const dy = Math.abs(knightPos.row - row);
    return (dx === 2 && dy === 1) || (dx === 1 && dy === 2);
  };

  const isValidRookMove = () => {
    return rookPos.column === column || rookPos.row === row;
  };

  const handleClick = () => {
    if (currentFigure === 'knight' && isValidKnightMove()) {
      dispatch(figuresSlice.actions.setToPosition({ figure: 'knight', column, row }));
    }
    if (currentFigure === 'rook' && isValidRookMove()) {
      dispatch(figuresSlice.actions.setToPosition({ figure: 'rook', column, row }));
    }
  };

  const color = (column % 2 === row % 2) ? 'white' : 'black';
  const isCurrent = (isKnight && currentFigure === 'knight') || (isRook && currentFigure === 'rook');

  return (
    <div className={clsx(classes.cell, classes[color], isCurrent && classes.current)} onClick={handleClick}>
      {isKnight && <Knight />}
      {isRook && <Rook />}
    </div>
  );
};
