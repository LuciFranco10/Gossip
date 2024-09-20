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
  background-color: #2b2d42;
`;



  export const Title = styled.h1`
  font-size: 80px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px; 
  color: #eef4ed; 
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
  Animation: ${fadeAnimation} 2s ease-in-out infinite;
`;

export const SubTitle = styled.p`
  font-size: 32px;
  font-weight: normal;
  text-align: center;
  margin-bottom: 30px; 
  color: #eef0f2; 
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;

`;

export const Button = styled.button`
  font-size: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 18px;
  height: 60px;
  border-radius: 5px;
  background-color: #daddd8;
  color: #333;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid #a480cf;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 20px; /* Espaço entre o botão e o título */

  svg {
    margin-right: 8px;
  }

  &:hover {
    background-color: #8e9aaf;
    color: white;
    border-color: #b8bedd;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  &:focus {
    outline: none;
    border-color: lightblue;
    box-shadow: 0 0 5px lightblue;
  }

  &:active {
    background-color: daddd8;
    border-color: #c77dff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

export const LeftSection = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`;

export const RightSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
  min-height: 100vh;
  background-color: #eef0f2; /* Fundo opcional */

`;

export const Image = styled.img`
  max-width: 70%; /* Define a largura máxima da imagem */
  max-height: 90%; /* Define a altura máxima da imagem */

`;
