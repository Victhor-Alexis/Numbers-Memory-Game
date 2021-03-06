import React from 'react'
import { useDynimicityContext } from '../../Context/useDynimicityContext'
import Button from '../Button'
import RunningDisplay from '../RunningDisplay'
import StartDisplay from '../StartDisplay'
import VerifyingDisplay from '../VerifyingDisplay'
import { Container} from './styles'

const CentralBox = () => {

    const { btnValue } = useDynimicityContext();

    return (
        <Container>
            <StartDisplay/>
            <RunningDisplay/>
            <VerifyingDisplay/>
            <Button>{btnValue}</Button>
        </Container>
    )
}

export default CentralBox
