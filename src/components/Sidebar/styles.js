// styles.js
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 35%;
  max-width: 415px;
  border: 1px solid #e9ecef;
  height: 100vh;
  background-color: #fbfefb;
  color: #000814;
  font-family: "Manrope", sans-serif;
  font-optical-sizing: auto;
  
  font-style: normal;
`;

export const LogoutButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  position: fixed;
  bottom: 10px;
  left: 10px;
  outline: none;
  box-shadow: none;
  

  &:hover, &:focus, &:active {
    outline: none;
    box-shadow: none;
  }
`;

// Adicionando estilização para o item de contato
export const SidebarChatsItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #e0e0e0;
  cursor: pointer;

  &:hover {
    background-color: #fff; // Altera o fundo para branco ao passar o mouse
    color: #333333; // (Opcional) Altera a cor do texto, se desejar
  }
`;

