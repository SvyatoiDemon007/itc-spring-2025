import classes from './Cell.module.css'
import clsx from 'clsx'

export const Cell = ({ column, row }) => {
  const color = (column % 2 === row % 2) ? 'white' : 'black';

  const handleClick = () => {
  }

  return (
    <div className={clsx(classes.cell, classes[color])}
      onClick={handleClick}
    >
    </div>
  )
}
