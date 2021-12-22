import React, {useState} from 'react'
import { useDynimicityContext } from '../../Context/useDynimicityContext'
import { Container } from './styles'
import Cookie from 'js-cookie'

const BoxChangeValue = ({left, displayBox, type}) => {

    const [value, setValue] = useState("");
    const {setNumbers, setTime, time, numbers} = useDynimicityContext();

    return (
        <Container left={left} displayBox={displayBox}>
            <div className="close">
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="1.13679" y1="0.894249" x2="15.2789" y2="15.0364" stroke="white" strokeWidth="2px"/>
                    <line x1="0.42968" y1="15.0364" x2="14.5718" y2="0.894265" stroke="white" strokeWidth="2px"/>
                </svg>
            </div>

            <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>

            <button onClick={() => {
                if (type === 1) {
                    setTime(value)
                    Cookie.set("timeAmount", value)
                } else {
                    setNumbers(value)
                    Cookie.set("numbersAmount", value)
                }
            }}>Mudar</button>
            
            <svg width="160" height="28" viewBox="0 0 160 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="0.999939" x2="128.009" y2="0.999939" stroke="white" strokeWidth="2"/>
                <line y1="-1" x2="30.5652" y2="-1" transform="matrix(0.526764 0.850012 -0.844196 0.536034 126.792 1.99994)" stroke="white" strokeWidth="2"/>
                <line y1="-1" x2="30.5652" y2="-1" transform="matrix(0.526764 -0.850012 0.912318 0.409483 143.899 27.9808)" stroke="white" strokeWidth="2"/>
            </svg>

        </Container>            
    )
}

export default BoxChangeValue
