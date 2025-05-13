import { useEffect, useState, useRef } from "react";
import { Graph } from "./Graph"
import classes from './Population.module.css'

const populationUrl = "https://countriesnow.space/api/v0.1/countries/population";

export const Population = () => {
  const [data, setData] = useState([]);
  const [population, setPopulation] = useState(null);
  const ref = useRef();

  useEffect(() => {
    // TODO
  }, []);

  const handleChangeCountry = () => {
    // TODO
  }

  return (
    <div>
      <select ref={ref} className={classes.select} onChange={handleChangeCountry} defaultValue="">
      { data.map((d) => {
        return <option value={ d.code }>{ d.country }</option>
      }) }
      </select>
      <Graph population={ population } />
    </div>
  );
}
