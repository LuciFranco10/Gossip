import React from "react";
import * as C from "./styled";

const Default = () => {
    return (
      <C.Container>
        <img src="/image.jpeg" alt="Imagem do chat" style={{ width: '100px', height: '100px' }} />
        <C.Title>Chat App</C.Title>
        <C.Info>
          Agora você pode enviar e receber mensagens sem precisar manter seu celular conectado à internet.
        </C.Info>
      </C.Container>
    );
  };
  
  export default Default;