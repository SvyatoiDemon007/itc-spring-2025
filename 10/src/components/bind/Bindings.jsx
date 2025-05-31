import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindSlice } from '../../store/slices/bind';
import { positionSlice } from '../../store/slices/position';
import { Bind } from './Bind';
import classes from './Bindings.module.css';

export const Bindings = () => {
  const dispatch = useDispatch();
  const { getDirection } = bindSlice.selectors;
  const { setBind } = bindSlice.actions;
  const currentDirection = useSelector(getDirection);

  useEffect(() => {
    const bindHandler = (e) => {
      if (currentDirection) {
        dispatch(setBind({ direction: currentDirection, key: e.code }));
      }
    };

    document.addEventListener('keydown', bindHandler);
    return () => document.removeEventListener('keydown', bindHandler);
  }, [currentDirection, dispatch]);

  return (
    <div className={classes.bindings}>
      <Bind direction="up" />
      <Bind direction="down" />
      <Bind direction="left" />
      <Bind direction="right" />
    </div>
  );
};
