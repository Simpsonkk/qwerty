import { type CSSProperties } from 'react';
import { SpinnerDotted } from 'spinners-react';

function Loader(): JSX.Element {
  const spinnerStyles: CSSProperties = {
    position: 'absolute',
    top: '40%',
    left: '85%',
    transform: 'translate(-50%, -50%)',
  };

  return <SpinnerDotted color="white" style={spinnerStyles} size={100} />;
}

export default Loader;
