import styled from "styled-components";
import background from "../../Assets/dan-cristian-padure-xJLN32FO7AY-unsplash.jpg"

export const Container = styled.div`
    background-image: url(${background});
    height: 100%;
    width: 100%;
    background-size: contain;
    color: white;

    h1 {
        font-size: 12px;
        font-weight: normal;
        position: absolute;
        bottom: 2%;
        left: 50%;
        transform: translateX(-50%);
        background-color: black;
    }
`;