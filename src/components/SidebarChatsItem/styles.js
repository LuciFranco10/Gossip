import { TbBackground } from "react-icons/tb";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-itens: center;
    justify-content: start;
    padding: 15px 20px;
    cursor: pointer;

    

    &:hover {
        background-color:#f0f2f5;

    }

    svg {
        width: 30px;
        heigth: 30px;
        backgroud-color: #ccc;
        border-radius: 50%;
        margin-right: 10px;
        min-width: fit-content;
        }

    &.active {
        background-color: #f0f2f5;
    }
    
    `;

export const Name = styled.span`
        font-size: 18px;
        overflow: hidden;
        text-overflow: ellipsis;
    
    `;

export const Avatar = styled.img`
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin-right: 10px;
        min-width: fit-content;
    
  
`;