import React from 'react'
import { useDynimicityContext } from '../../Context/useDynimicityContext'
import { Container } from './styles'

const VerifyingDisplay = () => {
    
    const {display, setCheckNumber, checkNumber} = useDynimicityContext();

    return (
        <Container style={{display: display[2]}}>
            <input type="text" placeholder="response..." value={checkNumber} onChange={(e) => setCheckNumber(e.target.value)}/>
        </Container>
    )
}

export default VerifyingDisplay
