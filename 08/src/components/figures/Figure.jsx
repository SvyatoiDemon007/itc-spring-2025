import { allFigures } from './registry';

export const Figure = ({ slug }) => {
  if (!slug || !allFigures[slug]) return null;

  const Component = allFigures[slug];
  return <Component />;
};
