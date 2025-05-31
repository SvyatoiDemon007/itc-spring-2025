import { BarChart } from '@mui/x-charts/BarChart';

export const Graph = ({ population }) => {
  if (!Array.isArray(population)) {
    return null;
  }

  const years = population.map((p) => p.year);
  const values = population.map((p) => Number(p.value));

  return (
    <BarChart
      xAxis={[{ scaleType: 'band', data: years }]}
      series={[{ data: values, label: 'Население' }]}
      height={600}
    />
  );
};
