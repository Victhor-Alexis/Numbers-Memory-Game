import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    .timeBar {
        height: 0.64rem;
        background-color: white;
        border-radius: 0.4rem;
        margin: 4rem auto;
        transition: linear ${props => props.time}s;
    }

    .number {
        color: white;
        font-size: 24px;
        width: 80%;
        word-wrap: break-word;
        margin: 0 auto;
        text-align: center;
    }

    @media screen and (max-width: 1300px) {
        .timeBar {
            margin: 3rem auto 3rem auto;
        }
    }

    @media screen and (max-width: 1100px) {
        .timeBar {
            margin: 2rem auto 2rem auto;
        }
    }

    @media screen and (max-width: 1048px) {
        .timeBar {
            margin: 1.5rem auto 1.2rem auto;
        }
    }
`;