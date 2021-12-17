import { createContext, useContext, useState} from "react";

const DynimicityContext = createContext({});

const DynimicityProvider = ({children}) => {

    const [time, setTime] = useState(60);
    const [numbers, setNumbers] = useState(12);
    const [display, setDisplay] = useState([]);
    const [btnValue, setBtnValue] = useState("Start");

    const whatToDisplay = (btnValue) => {
        switch (btnValue) {
            case "Start":
                setDisplay(["none", "block", "none"]);
                setBtnValue("Stop")
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
        <DynimicityContext.Provider value={{time, setTime, numbers, setNumbers, display, whatToDisplay, btnValue}}>
            {children}
        </DynimicityContext.Provider>
    );
}

const useDynimicityContext = () => {
    const context = useContext(DynimicityContext)

    return context;
}

export {DynimicityProvider, useDynimicityContext}