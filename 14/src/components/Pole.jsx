import { useDispatch, useSelector } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { moveSlice } from '../store/slices/move';
import { itemsSlice } from '../store/slices/items';
import { Item } from './Item';
import classes from './Pole.module.css';

export const Pole = ({ id }) => {
  const { setSource, dropSource } = moveSlice.actions;
  const { moveDisk } = itemsSlice.actions;
  const { getSource } = moveSlice.selectors;
  const { getItems } = itemsSlice.selectors;

  const dispatch = useDispatch();
  const source = useSelector(getSource);
  const items = useSelector(getItems)[id] || [];

  const handleClick = () => {
    if (source === null) {
      dispatch(setSource(id));
    } else {
      if (source !== id) {
        dispatch(moveDisk({ from: source, to: id }));
      }
      dispatch(dropSource());
    }
  };

  const renderItems = () => {
    return items.map((itemId, index) => (
      <Item key={index} number={itemId} />
    ));
  };

  return (
    <div className={classes.pole} onClick={handleClick}>
      {renderItems()}
    </div>
  );
};
