import React from 'react'
import { Container } from './styles';
import { useDynimicityContext } from '../../Context/useDynimicityContext'

const Button = ({children}) => {
    const { whatToDisplay, btnValue } = useDynimicityContext();

    return (
        <Container onClick={() => {whatToDisplay("Start")}}>
            {children}
        </Container>
    );
}

export default Button
