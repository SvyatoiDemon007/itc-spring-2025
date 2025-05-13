import { BarChart } from '@mui/x-charts/BarChart';

export const Graph = ({ population }) => {
  if (!Array.isArray(population)) {
    return null;
  }

  // TODO: ...
  return (
    <BarChart
      height={600}
    />
  )
}
