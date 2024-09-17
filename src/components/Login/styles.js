import styled, { keyframes } from 'styled-components';


export const fadeAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  50% {
    opacity: 0.5;
    transform: translateY(0);
  }
  100% {
    opacity: 1;
    transform: translateY(-20px);
  }
`;


export const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: flex-end;
  background: 
    linear-gradient(180deg, #ffdcd5 0, #ffcbc7 25%, #f2b5b5 50%, #e4a0a5 75%, #d88f9a 100%) left no-repeat,
    url('/moca.jpeg') right no-repeat;
  background-size: 60% 100%, 30% 65%; /* Ajusta o tamanho do gradiente e da imagem */
  background-position: left, 95%; /* Posiciona o gradiente à esquerda e a imagem à direita */
`;


export const Title = styled.h1`
  font-size: 70px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px; 
  color: #0a0a0a; 
  font-family: 'Playpen Sans', cursive;
  animation: ${fadeAnimation} 2s ease-in-out infinite;
`;


export const SubTitle = styled.p`
  font-size: 24px;
  font-weight: normal;
  text-align: center;
  margin-bottom: 30px; 
  color: #0a0a0a; 
   font-family: 'Playpen Sans', sans-serif;
`;

export const Button = styled.button`
  font-size: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 18px;
  height: 60px;
  border-radius: 10px;
  background-color: #f5f5f5;
  color: #333;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 20px; /* Espaço entre o botão e o título */

  svg {
    margin-right: 8px;
  }

  &:hover {
    background-color: #DCDCDC;
    color: white;
    border-color: #ffcccb;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  &:focus {
    outline: none;
    border-color: lightblue;
    box-shadow: 0 0 5px lightblue;
  }

  &:active {
    background-color: darkpink;
    border-color: #ff9999;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

export const LeftSection = styled.div`
  flex: 1; /* Permite que a seção ocupe o espaço disponível à esquerda */
  display: flex;
  flex-direction: column; /* Empilha o título e o botão verticalmente */
  align-items: center;
  justify-content: center; /* Alinha o conteúdo ao centro, se necessário */
  padding: 20px; /* Adiciona um pouco de espaço ao redor do conteúdo */
`;

export const RightSection = styled.div`
  flex: 1; /* Permite que a seção ocupe o espaço disponível à direita */
  display: flex;
  align-items: center;
  justify-content: center; /* Alinha o conteúdo ao centro, se necessário */
`;