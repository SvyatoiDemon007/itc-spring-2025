import classes from './Check.module.css';
import clsx from 'clsx';

import { useSelector, useDispatch } from "react-redux";
import { selectedSlice } from "../../store/reducers/selected";
import { Figure } from './Figure';

export const Check = ({ slug }) => {
  const { getSelected } = selectedSlice.selectors;
  const { setSelected } = selectedSlice.actions;

  const selected = useSelector(getSelected);
  const dispatch = useDispatch();

  const isSelected = slug === selected;

  const handleClick = () => {
    dispatch(setSelected(slug));
  };

  return (
    <div className={clsx({ [classes.selected]: isSelected })} onClick={handleClick}>
      <Figure slug={slug} />
    </div>
  );
};
