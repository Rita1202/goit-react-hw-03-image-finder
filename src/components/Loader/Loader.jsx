import { LineWave } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <LineWave
      height="100"
      width="100"
      color=" #8585ad"
      ariaLabel="line-wave"
      wrapperClass="wrapper-loader"
    />
  );
};
