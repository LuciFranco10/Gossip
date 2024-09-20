import React from "react";
import * as C from "./styled";

const Default = () => {
    return (
      <C.Container>
        <img src="/image.jpeg" alt="Imagem do chat" style={{ width: '100px', height: '100px' }} />
        <C.Title>ChatOn</C.Title>
        <C.Info>
        Suas conversas sem complicação, aproveitando toda a praticidade do ChatOn.
        </C.Info>
      </C.Container>
    );
  };
  
  export default Default;