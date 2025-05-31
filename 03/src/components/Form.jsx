import { useDispatch, useSelector } from "react-redux";
import { rowsSlice } from "../store/reducers/rows";
import { useRef } from "react";
import { useNavigate, useParams } from "react-router";
import classes from "./Form.module.css";

export const Form = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { setRow } = rowsSlice.actions;

  const row = useSelector((state) => (
    state.rows.rows.find((row) => row.id === id)
  ));

  if (!row) {
    return <p>Запись с ID {id} не найдена</p>;
  }

  const { name, city } = row;

  const nameRef = useRef();
  const cityRef = useRef();

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    }
  };

  const handleSave = () => {
    dispatch(setRow({
      id,
      name: nameRef.current.value,
      city: cityRef.current.value
    }));
    navigate('/');
  };

  return (
    <div className={classes.form}>
      <div className={classes.row}>
        <label htmlFor="form_name" className={classes.label}>Имя</label>
        <input id="form_name" className={classes.input} ref={nameRef} defaultValue={name} onKeyDown={handleKeyDown} />
      </div>
      <div className={classes.row}>
        <label htmlFor="form_city" className={classes.label}>Город</label>
        <input id="form_city" className={classes.input} ref={cityRef} defaultValue={city} onKeyDown={handleKeyDown} />
      </div>
      <div className={classes.row}>
        <button className={classes.button} onClick={handleSave}>
          Сохранить
        </button>
      </div>
    </div>
  );
