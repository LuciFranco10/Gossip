import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  border: 50%;
  object-fit: cover; /* Garante que a imagem mantenha suas proporções */
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Info = styled.span`
  font-size: 18px;
  text-align: center;
  max-width: 500px;
`;
