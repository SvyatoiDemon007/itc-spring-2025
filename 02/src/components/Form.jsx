import classes from "./Form.module.css";
import { useRef, useEffect } from "react";

export const Form = ({ row, setRows, setCurrentRow }) => {
  const { id, name, city } = row;
  const nameRef = useRef();
  const cityRef = useRef();

  useEffect(() => {
    if (row) {
      nameRef.current.value = name;
      cityRef.current.value = city;
    }
  }, [row]);

  const handleSave = () => {
    if (id !== undefined) {
      setRows((prevRows) => 
        prevRows.map((r) => 
          r.id === id ? { ...r, name: nameRef.current.value, city: cityRef.current.value } : r
        )
      );
      setCurrentRow(-1);
    }
  };

  return (
    <div className={classes.form}>
      {id !== undefined ? (
        <>
          <div className={classes.row}>
            <label className={classes.label}>Имя</label>
            <input className={classes.input} ref={nameRef} />
          </div>
          <div className={classes.row}>
            <label className={classes.label}>Город</label>
            <input className={classes.input} ref={cityRef} />
          </div>
          <div className={classes.row}>
            <button className={classes.button} onClick={handleSave}>
              Сохранить
            </button>
          </div>
        </>
      ) : (
        <p>Выберите строку для редактирования</p>
      )}
    </div>
  );
};

