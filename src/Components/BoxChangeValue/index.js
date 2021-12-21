import React, {useState} from 'react'
import { useDynimicityContext } from '../../Context/useDynimicityContext'
import { Container } from './styles'

const BoxChangeValue = ({left, displayBox, type}) => {

    const [value, setValue] = useState("");
    const {setNumbers, setTime} = useDynimicityContext();

    return (
        <Container left={left} displayBox={displayBox}>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>

            <button onClick={() => {
                if (type === 1) {
                    setTime(value)
                } else {
                    setNumbers(value)
                }
            }}>Mudar</button>
            
            <svg width="160" height="28" viewBox="0 0 160 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="0.999939" x2="128.009" y2="0.999939" stroke="white" stroke-width="2"/>
                <line y1="-1" x2="30.5652" y2="-1" transform="matrix(0.526764 0.850012 -0.844196 0.536034 126.792 1.99994)" stroke="white" stroke-width="2"/>
                <line y1="-1" x2="30.5652" y2="-1" transform="matrix(0.526764 -0.850012 0.912318 0.409483 143.899 27.9808)" stroke="white" stroke-width="2"/>
            </svg>

        </Container>            
    )
}

export default BoxChangeValue
