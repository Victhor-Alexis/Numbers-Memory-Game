import styled from "styled-components";

export const Container = styled.div`
    margin-top: 19%;

    .changeLevel {
        display: flex;
        justify-content: center;
        margin: 1.5rem 0;
        position: relative;

        h1 {
            color: white;
            width: 16rem;
        }

        @keyframes coolMove {
            0%   {top: 0}
            25%  {top: -0.15rem}
            50%  {top: 0}
            75%  {top: 0.25rem}
            100% {top: 0}
        }

        span {
            cursor: pointer;
            position: relative;

            :hover {
                animation-name: coolMove;
                animation-duration: 0.75s;
                animation-iteration-count: infinite;
                animation-timing-function: linear;
            }
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

    :last-of-type {
        margin: 0;
    }

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