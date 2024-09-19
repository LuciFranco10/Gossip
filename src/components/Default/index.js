import React from "react";
import * as C from "./styled";

const Default = () => {
    return (
        <C.Container>
            <img src="/gosma.jpeg" alt="Mensagem" style={{ width: '100px', height: '80px' }} />
            <C.Title>Chat App</C.Title>
            <C.Info>
            A tecnologia ajudando você a conectar a quem você mais importa.
            </C.Info>
        </C.Container>
    );
};

export default Default;
