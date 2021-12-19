import React, {useState} from 'react'
import { Container } from './styles';
import { useDynimicityContext } from '../../Context/useDynimicityContext'

const Button = ({children}) => {
    const { whatToDisplay, btnValue, time } = useDynimicityContext();
    const [timeoutId, setTimeoutId] = useState(0);
        
    const handleClick = () => {
        if (timeoutId) {
            console.log("Entrou!")
            clearTimeout(timeoutId);
            setTimeoutId(0);
            return;
        }
        
        const newTimeoutId = setTimeout(() => {
            whatToDisplay("Stop");
            clearTimeout(timeoutId);
            setTimeoutId(0);
        }, time*1000);
        
        setTimeoutId(newTimeoutId);
    };

    return (
        <Container onClick={() => {
                whatToDisplay(btnValue)

                if (btnValue !== "Verify")
                    handleClick()
            }}>
            {children}
        </Container>
    );
}

export default Button
