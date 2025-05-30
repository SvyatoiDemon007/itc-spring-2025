import classes from './Check.module.css'
import clsx from 'clsx'

import { useSelector } from "react-redux";
import { selectedSlice } from "../../store/reducers/selected";
import { Figure } from './Figure';

export const Check = ({ slug }) => {
  const { getSelected } = selectedSlice.selectors;

  const isSelected = slug === useSelector(getSelected);

  const handleClick = () => {
  }

  return (
    <div className={clsx({[classes.selected]: isSelected})} onClick={handleClick}>
      <Figure slug={slug} />
    </div>
  );
}
