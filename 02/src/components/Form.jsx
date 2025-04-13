import classes from "./Form.module.css";
import { useRef, useEffect } from "react";

export const Form = ({ row, setRows, setCurrentRow }) => {
  const { id, name, city } = row;
  const nameRef = useRef();
  const cityRef = useRef();

  useEffect(() => {
  }, []);

  const handleSave = () => {
  };

  return (
    <div className={classes.form}>
      <div className={classes.row}>
        <label className={classes.label}>Имя</label>
        <input className={classes.input} ref={nameRef} defaultValue={name} />
      </div>
      <div className={classes.row}>
        <label className={classes.label}>Город</label>
        <input className={classes.input} ref={cityRef} defaultValue={city} />
      </div>
      <div className={classes.row}>
        <button className={classes.button} onClick={handleSave}>
          Сохранить
        </button>
      </div>
    </div>
  );
};
