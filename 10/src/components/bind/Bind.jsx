import { useDispatch, useSelector } from 'react-redux';
import { bindSlice } from '../../store/slices/bind';
import classes from './Bind.module.css';

export const Bind = ({ direction }) => {
  const dispatch = useDispatch();
  const { getBinds, getDirection } = bindSlice.selectors;
  const { selectDirection } = bindSlice.actions;

  const currentDirection = useSelector(getDirection);
  const bindings = useSelector(getBinds);
  const waiting = direction === currentDirection;

  const handleClick = () => {
    dispatch(selectDirection(direction));
  };

  return (
    <div className={classes.bind} onClick={handleClick}>
      {direction.toUpperCase()}: {bindings[direction]}
      {waiting && <span className={classes.waiting}>waiting</span>}
    </div>
  );
};
