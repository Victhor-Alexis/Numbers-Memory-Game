import styled from "styled-components";

export const Container = styled.div`
    width: 40%;
    height: 36vw;
    min-width: 20rem;
    min-height: 24rem;
    position: absolute;
    top: 48%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #868597;
    border-top: 2rem solid #A093A6;
    border-bottom: 2rem solid #A093A6;
    border-radius: 2rem;

    .changeLevel {
        display: flex;
        justify-content: center;
        margin: 1.5rem 0;
        position: relative;
        top: 20%;

        h1 {
            color: white;
            width: 16rem;
        }
    }
`;

export const ButtonChange = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    background-color: #AC3E11;
    border-radius: 0.5rem;
    margin: 0 2rem;
    cursor: pointer;
    transition: 0.4s;



    :hover {
        background-color: #CB4A15;
    }
    
    .line {
        width: 1.75rem;
        height: 0.3rem;
        background-color: white;
        margin: 0 auto;
        border-radius: 0.5rem;
        transform: translateY(-50%);
        position: relative;
        top: 50%;
    }

    .line:last-of-type {
        transform: rotate(90deg) translateX(-25%);
        display: ${props => props.minus ? "none" : "block"};
    }
`;