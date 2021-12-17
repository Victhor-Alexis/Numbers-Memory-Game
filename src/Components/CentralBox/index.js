import React from 'react'
import { useDynimicityContext } from '../../Context/useDynimicityContext'
import Button from '../Button'
import StartDisplay from '../StartDisplay'
import { Container} from './styles'

const CentralBox = () => {

    const { btnValue } = useDynimicityContext();

    return (
        <Container>
            <StartDisplay/>
            <Button>{btnValue}</Button>
        </Container>
    )
}

export default CentralBox
