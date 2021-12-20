import React, { useState } from 'react'
import { useDynimicityContext } from '../../Context/useDynimicityContext'
import { Container } from './styles'

const VerifyingDisplay = () => {
    
    const {display, setCheckNumber} = useDynimicityContext();

    return (
        <Container style={{display: display[2]}}>
            <input type="text" placeholder="response..." onChange={(e) => setCheckNumber(e.target.value)}></input>
        </Container>
    )
}

export default VerifyingDisplay
