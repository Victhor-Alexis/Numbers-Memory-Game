import React from 'react'
import { useDynimicityContext } from '../../Context/useDynimicityContext'
import { Container, ButtonChange } from './styles'

const StartDisplay = () => {

    const {time, setTime, numbers, setNumbers, display} = useDynimicityContext();

    return (
        <Container style={{display: display[0]}}>
            <div className="changeLevel">
                <h1>Tempo: {time}s</h1>

                <ButtonChange minus onClick={() => setTime(time - 1)}>
                    <div className="line"></div>
                    <div className="line"></div>
                </ButtonChange>

                <ButtonChange onClick={() => setTime(time + 1)}>
                    <div className="line"></div>
                    <div className="line"></div>
                </ButtonChange>
            </div>

            <div className="changeLevel">
                <h1>Números: {numbers}</h1>

                <ButtonChange minus onClick={() => setNumbers(numbers - 1)}>
                    <div className="line"></div>
                    <div className="line"></div>
                </ButtonChange>

                <ButtonChange onClick={() => setNumbers(numbers + 1)}>
                    <div className="line"></div>
                    <div className="line"></div>
                </ButtonChange>
            </div>
        </Container>
    )
}

export default StartDisplay
