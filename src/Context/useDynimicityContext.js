import { createContext, useContext, useState} from "react";
import Cookie from 'js-cookie'
import { useEffect } from "react";

const DynimicityContext = createContext({});

const DynimicityProvider = ({children}) => {

    const [time, setTime] = useState(60);
    const [numbers, setNumbers] = useState(12);
    const [display, setDisplay] = useState(["block", "none", "none"]);
    const [btnValue, setBtnValue] = useState("Start");
    const [szTimer, setSzTimer] = useState("80%");
    const [number, setNumber] = useState("");
    const [checkNumber, setCheckNumber] = useState("");

    useEffect(() => {
        const retrievedNumbers = Cookie.get("numbersAmount");
        const retrievedTime = Cookie.get("timeAmount");

        if (retrievedNumbers)
            setNumbers(retrievedNumbers);

        if (retrievedTime)
            setTime(retrievedTime)
    }, [])

    const whatToDisplay = (btnValue) => {
        let realNumber = "";

        switch (btnValue) {
            case "Start":
                setDisplay(["none", "block", "none"]);
                setBtnValue("Stop")
                setSzTimer("80%")
                setTimeout(() => setSzTimer("0%"), 0.00000001)

                for (let i = 0; i < numbers; ++i) {
                    realNumber += Math.floor(Math.random() * 10);
                }
                
                setNumber(realNumber);
                break;
            
            case "Stop":
                setDisplay(["none", "none", "block"]);
                setBtnValue("Verify")
                break;
        
            default:
                alert("Resposta: "+number)

                if (number === checkNumber) {
                    alert("Acertou!")
                }
                else
                    alert("Errou!")

                setDisplay(["block", "none", "none"]);
                setBtnValue("Start")
                setCheckNumber("")
                break;
        }
    }

    return (
        <DynimicityContext.Provider value={{time, setTime, numbers, 
                                            setNumbers, display, whatToDisplay,
                                            btnValue, szTimer, number, 
                                            setCheckNumber, checkNumber}}>
            {children}
        </DynimicityContext.Provider>
    );
}

const useDynimicityContext = () => {
    const context = useContext(DynimicityContext)

    return context;
}

export {DynimicityProvider, useDynimicityContext}