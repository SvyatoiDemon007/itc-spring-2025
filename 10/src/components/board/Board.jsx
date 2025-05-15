import classes from './Board.module.css'
import { Row } from './Row';
import { Cell } from './Cell';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { positionSlice } from '../../store/slices/position';
import { bindSlice } from '../../store/slices/bind';

const range = () => [ 0, 1, 2 ];

export const Board = () => {
  const dispatch = useDispatch();
  const { moveDir } = positionSlice.actions;
  const { getBinds } = bindSlice.selectors;
  const binds = useSelector(getBinds);
  const { up, down, left, right } = binds;

  useEffect(() => {
    const arrowHandler = (e) => {
      if (e.code === left) {
        dispatch(moveDir({direction: 'LEFT'}));
      } else if (e.code === right) {
        dispatch(moveDir({direction: 'RIGHT'}));
      } else if (e.code === up) {
        dispatch(moveDir({direction: 'UP'}));
      } else if (e.code === down) {
        dispatch(moveDir({direction: 'DOWN'}));
      }
    }

    document.addEventListener('keydown', arrowHandler);

    return () => {
      document.removeEventListener('keydown', arrowHandler);
    }
  }, [binds]);

  return (
    <div className={classes.board}>
      {
        range().map((row) => {
          return (
            <Row>
              { range().map((column) => <Cell row={row} column={column}/>) }
            </Row>
          )
        })
      }
    </div>
  );
}
