import styled from "styled-components";

export const Container = styled.div``;

export const Line = styled.div`
  margin: 10px;
  display: flex;

  &.me {
    justify-content: right;
  }

  &.me > div {
    background-color: #eaeaea; /* cor das mensagens enviadas */
  }

  &.me > div::after {
    content: '';
    position: absolute;
    top: 0;
    right: -1.5px; /* Ajusta a seta à direita para mensagens enviadas */
    width: 0;
    height: 0;
    border-top: 10px solid #eaeaea; /* cor da seta */
    border-right: 10px solid transparent;
  }

  &.them {
    justify-content: left;
  }

  &.them > div {
    background-color: #a48df7; /* cor das mensagens recebidas */
  }

  &.them > div::after {
    content: '';
    position: absolute;
    top: 0;
    left: -1.5px; /* Ajusta a seta à esquerda para mensagens recebidas */
    width: 0;
    height: 0;
    border-top: 10px solid #a48df7; /* cor da seta para mensagens recebidas */
    border-left: 10px solid transparent;
  }
`;

export const Content = styled.div`
  background-color: ${({ bgColor }) => bgColor || '#a48df7'}; /* Cor de fundo das mensagens */
  border-radius: 10px;
  box-shadow: 0 1px 1px #ccc;
  display: flex;
  flex-direction: column;
  padding: 3px;
  max-width: 80%;
  position: relative; /* Necessário para a posição das setinhas */
`;

export const Message = styled.span`
  font-size: 14px;
  margin: 5px 40px 5px 5px;
  color: ${({ color }) => color || 'black'}; /* Usa a prop de cor, com 'black' como padrão */
  font-weight: bold;
`;

export const MessageDate = styled.span`
  font-size: 10px;
  color: ${({ color }) => color || 'black'}; /* Usa a prop de cor, com 'black' como padrão */
  text-align: right;
  margin: 5px 5px 0;
  font-weight: bold;
`;

