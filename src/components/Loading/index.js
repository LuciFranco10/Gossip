import React from "react";
import { RingLoader } from 'react-spinners';
import * as C from "./styles";

const LoadingSpinner = () => {
  return (
    <C.Container>
      <RingLoader />
    </C.Container>
  );
};

export default LoadingSpinner;