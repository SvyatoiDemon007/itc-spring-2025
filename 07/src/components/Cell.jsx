import classes from './Cell.module.css';
import { onBoard, boardSlice } from '../store/reducers/board';
import { useDispatch, useSelector } from 'react-redux';

const boardWidth = 7;

const dummyCell = () => {
  return (
    <div className={classes.dummy} />
  )
}

const selectedCell = () => {
  return (
    <div className={classes.selected} />
  )
}

const filledCell = () => {
  return (
    <div className={classes.filled} />
  )
}

const emptyCell = () => {
  return (
    <div className={classes.empty} />
  )
}


export const Cell = ({ row, col }) => {
  return emptyCell();
}
