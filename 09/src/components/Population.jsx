import { useEffect, useState, useRef } from "react";
import { Graph } from "./Graph";
import classes from './Population.module.css';

const populationUrl = "https://countriesnow.space/api/v0.1/countries/population";

export const Population = () => {
  const [data, setData] = useState([]);
  const [population, setPopulation] = useState(null);
  const ref = useRef();

  useEffect(() => {
    const load = async () => {
      const resp = await fetch(populationUrl);
      const result = await resp.json();
      setData(result.data);
    };

    load();
  }, []);

  const handleChangeCountry = () => {
    const code = ref.current.value;
    const country = data.find((e) => e.code === code);

    if (country && Array.isArray(country.populationCounts)) {
      setPopulation(country.populationCounts);
    }
  };

  return (
    <div>
      <select
        ref={ref}
        className={classes.select}
        onChange={handleChangeCountry}
        defaultValue=""
      >
        <option disabled value="">Выберите страну</option>
        {data.map((d) => (
          <option key={d.code} value={d.code}>
            {d.country}
          </option>
        ))}
      </select>
      <Graph population={population} />
    </div>
  );
};
