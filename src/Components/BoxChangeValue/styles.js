import styled  from "styled-components";

export const Container = styled.div`
    width: 10rem;
    height: 5.2rem;
    top: -6.5rem;
    position: absolute;
    z-index: ${props => props.displayBox ? "1" : "-1"};
    border: 2px solid white;
    border-radius: 0 1rem 0rem 0;
    border-bottom: 0;
    text-align: center;
    left: ${props => props.left ? "7.7rem" : "5rem"};
    opacity: ${props => props.displayBox ? "1" : "0"};
    transition: 0.5s;
    background-color: #868597;

    .close {
        display: none;

        svg {
            position: absolute;
            top: 0.25rem;
            left: 0.25rem;
            cursor: pointer;
        }
    }

    input {
        width: 65%;
        border: 2px solid white;
        background-color: #868597;
        outline: none;
        color: white;
        margin-top: 1.6rem;
        padding: 0.2rem;
        display: inline-block;
    }

    button {
        display: inline-block;
        width: 2.5rem;
        font-size: 11px;
        padding: 0.36rem 0;
        color: #868597;
        cursor: pointer;
        background-color: white;
        border: none;
        vertical-align: middle;
        margin-left: 0.3rem;
    }

    svg {
        position: relative;
        top: 1.745rem;
        left: -0.08rem;
    }

    @media screen and (max-width: 1240px) {
        left: ${props => props.left ? "-0.4rem" : "-2.5rem"};
    }

    @media screen and (min-width: 1365px) {
        left: ${props => props.left ? "10rem" : "7.5rem"};
    }

    @media screen and (min-width: 1565px) {
        left: ${props => props.left ? "11.4rem" : "9rem"};
    }
`;
