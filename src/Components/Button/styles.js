import styled from "styled-components";

export const Container = styled.button`
    width: 8.4rem;
    height: 4rem;
    border: 3px solid #fff;
    background-color: #868597;
    position: absolute;
    bottom: 4rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 21px;
    color: #fff;
    cursor: pointer;
    transition: 0.4s;

    :hover {
        background-color: white;
        color: #868597;
    }
`;