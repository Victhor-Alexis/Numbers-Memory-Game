import { useDynimicityContext } from "../../Context/useDynimicityContext";
import { Container } from "./styles";

const RunningDisplay = (as) => {

    const {display, time, szTimer, number} = useDynimicityContext();

    return (
        <Container time={time} style={{display: display[1]}}>
            <div className="timeBar" style={{width: szTimer}}></div>
            <p className="number">{number}</p>
        </Container>
    );
}

export default RunningDisplay
