import styled from "styled-components";

export const Container = styled.div`
    text-align: center;
    margin-top: 7rem;

    input {
        background-color: #868597;
        border: 4px solid #fff;
        outline: none;
        padding: 0.9rem;
        width: 70%;
        font-size: 21px;
        color: white;
    }

    @media screen and (max-width: 1280px) {
        margin-top: 5rem;
    }
`;