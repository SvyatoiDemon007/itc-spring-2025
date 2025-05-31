import { useDispatch, useSelector } from "react-redux";
import { boxesSlice } from "../store/slices/boxes"
import { orderSlice } from "../store/slices/order"
import classes from './Boxes.module.css'
import { useEffect } from "react";

export const Boxes = () => {
  const { getGreenBox, getOrangeBox, canMove } = boxesSlice.selectors;
  const { moveBox } = boxesSlice.actions;
  const { getOrder } = orderSlice.selectors;
  const { next } = orderSlice.actions;
  const greenBox = useSelector(getGreenBox);
  const orangeBox = useSelector(getOrangeBox);
  const order = useSelector(getOrder);
  const dispatch = useDispatch();
  const movesAvailable = useSelector(canMove);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!movesAvailable[order]) return;

      let direction = null;

      if (e.key === 'ArrowUp') direction = 'up';
      if (e.key === 'ArrowDown') direction = 'down';
      if (e.key === 'ArrowLeft') direction = 'left';
      if (e.key === 'ArrowRight') direction = 'right';

      if (direction) {
        dispatch(moveBox({ color: order, direction }));
        dispatch(next());
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [order, movesAvailable]);

  const renderBox = ({ color, row, column, value }) => {
    const left = (column * 100 + 20) + 'px';
    const top = (row * 100 + 20) + 'px';

    const style = {
      left,
      top,
      backgroundColor: color,
    }

    return (
      <div className={classes.box} style={style}>
        <div className={classes.title}>{ order === color ? "[" + value + "]" : value }</div>
      </div>
    )
  }

  return (
    <>
      { renderBox({ ...greenBox, color: 'green' }) }
      { renderBox({ ...orangeBox, color: 'orange' }) }
    </>
  )
}
