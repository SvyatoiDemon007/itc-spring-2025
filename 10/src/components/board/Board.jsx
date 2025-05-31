import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindSlice } from '../../store/slices/bind';
import { positionSlice } from '../../store/slices/position';
import { Row } from './Row';
import { Cell } from './Cell';
import classes from './Board.module.css';

const range = () => [0, 1, 2];

export const Board = () => {
  const dispatch = useDispatch();
  const { moveDir } = positionSlice.actions;
  const binds = useSelector(bindSlice.selectors.getBinds);

  useEffect(() => {
    const handler = (e) => {
      const directionEntry = Object.entries(binds).find(([dir, key]) => key === e.code);
      if (directionEntry) {
        const [dir] = directionEntry;
        dispatch(moveDir({ direction: dir.toUpperCase() }));
      }
    };

    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [binds, dispatch]);

  return (
    <div className={classes.board}>
      {range().map((row) => (
        <Row key={row}>
          {range().map((column) => (
            <Cell key={`${row}-${column}`} row={row} column={column} />
          ))}
        </Row>
      ))}
    </div>
  );
};
