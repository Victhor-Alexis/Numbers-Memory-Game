import React from 'react'
import Button from '../Button'
import { Container, ButtonChange } from './styles'

const CentralBox = () => {
    return (
        <Container>
            <div className="changeLevel">
                <h1>Tempo: 30s</h1>

                <ButtonChange minus>
                    <div className="line"></div>
                    <div className="line"></div>
                </ButtonChange>
            </div>

            <div className="changeLevel">
                <h1>Números: 20</h1>

                <ButtonChange>
                    <div className="line"></div>
                    <div className="line"></div>
                </ButtonChange>
            </div>

            <Button>Start</Button>
        </Container>
    )
}

export default CentralBox
