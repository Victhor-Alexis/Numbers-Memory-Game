import { useDynimicityContext } from '../../Context/useDynimicityContext'
import { Container, ButtonChange } from './styles'
import Cookie from 'js-cookie'
import BoxChangeValue from '../BoxChangeValue';
import { useState } from 'react';

const StartDisplay = () => {

    const {time, setTime, numbers, setNumbers, display} = useDynimicityContext();

    const [displayBoxChange, setDisplayBoxChange] = useState([false, false]);

    return (
        <Container style={{display: display[0]}}>
            <div className="changeLevel">
                
            <BoxChangeValue displayBox={displayBoxChange[0]} type={1}/>
                <h1>Tempo: <span onClick={() => displayBoxChange[0] ? setDisplayBoxChange([false, false]) : setDisplayBoxChange([true, false])}>{time}s</span></h1>

                <ButtonChange minus onClick={() => {
                    setTime(time - 1)
                    Cookie.set("timeAmount", time-1)
                }}>
                    <div className="line"></div>
                    <div className="line"></div>
                </ButtonChange>

                <ButtonChange onClick={() => {
                    setTime(parseInt(time) + 1)
                    Cookie.set("timeAmount", parseInt(time)+1)
                }}>
                    <div className="line"></div>
                    <div className="line"></div>
                </ButtonChange>
            </div>

            <div className="changeLevel">
                <BoxChangeValue left={true} displayBox={displayBoxChange[1]} type={2}/>
                <h1> Números: <span onClick={() => displayBoxChange[1] ? setDisplayBoxChange([false, false]) : setDisplayBoxChange([false, true])}>{numbers}</span></h1>

                <ButtonChange minus onClick={() => {
                    setNumbers(numbers - 1)
                    Cookie.set('numbersAmount', numbers-1)
                }}>
                    <div className="line"></div>
                    <div className="line"></div>
                </ButtonChange>

                <ButtonChange onClick={() => {
                    setNumbers(parseInt(numbers) + 1)
                    Cookie.set('numbersAmount', parseInt(numbers)+1)
                }}>
                    <div className="line"></div>
                    <div className="line"></div>
                </ButtonChange>
            </div>
        </Container>
    )
}

export default StartDisplay
