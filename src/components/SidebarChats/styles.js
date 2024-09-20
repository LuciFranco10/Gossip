import styled from "styled-components";

export const Container =styled.div`
heigth: calc(100vh - 70px);
overflow-y: auto;



&:: -webkit-scrollbar-thumb {
border-radius: 10px;
backgroud-color: rgba(0, 0, 0, 0.2);

}
`;

export const Content =styled.div``;

export const Divider =styled.div`
 margin: 0 10px;
 border-top: solid 1px #dee2e6;
`;