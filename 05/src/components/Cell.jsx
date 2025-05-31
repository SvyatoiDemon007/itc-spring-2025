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

  const validMoves = useSelector((state) =>
    figuresSlice.selectors.getValidMoves(state.figures)
  );

  const isKnight = knightPos.row === row && knightPos.column === column;
  const isRook = rookPos.row === row && rookPos.column === column;
  const isCurrent =
    (isKnight && currentFigure === 'knight') || (isRook && currentFigure === 'rook');

  const canMoveHere = validMoves.some(
    (pos) => pos.row === row && pos.column === column
  );

  const handleClick = () => {
    if (canMoveHere) {
      dispatch(figuresSlice.actions.setToPosition({ figure: currentFigure, row, column }));
    }
  };

  const color = (column % 2 === row % 2) ? 'white' : 'black';

  return (
    <div
      className={clsx(classes.cell, classes[color], isCurrent && classes.current)}
      onClick={handleClick}
    >
      {isKnight && <Knight />}
      {isRook && <Rook />}
    </div>
  );
};
