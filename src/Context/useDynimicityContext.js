import { createContext, useContext, useState} from "react";

const DynimicityContext = createContext({});

const DynimicityProvider = ({children}) => {

    const [time, setTime] = useState(60);
    const [numbers, setNumbers] = useState(12);
    const [display, setDisplay] = useState(["block", "none", "none"]);
    const [btnValue, setBtnValue] = useState("Start");
    const [szTimer, setSzTimer] = useState("80%");
    const [number, setNumber] = useState(1);

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
                setDisplay(["block", "none", "none"]);
                setBtnValue("Start")
                break;
        }
    }

    return (
        <DynimicityContext.Provider value={{time, setTime, numbers, 
                                            setNumbers, display, whatToDisplay,
                                            btnValue, szTimer, number}}>
            {children}
        </DynimicityContext.Provider>
    );
}

const useDynimicityContext = () => {
    const context = useContext(DynimicityContext)

    return context;
}

export {DynimicityProvider, useDynimicityContext}