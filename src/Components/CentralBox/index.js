import React from 'react'
import Button from '../Button'
import StartDisplay from '../StartDisplay'
import { Container} from './styles'

const CentralBox = () => {
    return (
        <Container>
            <StartDisplay/>
            <Button>Start</Button>
        </Container>
    )
}

export default CentralBox
