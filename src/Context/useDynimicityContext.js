import { createContext, useContext, useState} from "react";

const DynimicityContext = createContext({});

const DynimicityProvider = ({children}) => {

    const [time, setTime] = useState(60)
    const [numbers, setNumbers] = useState(12)

    return (
        <DynimicityContext.Provider value={{time, setTime, numbers, setNumbers}}>
            {children}
        </DynimicityContext.Provider>
    );
}

const useDynimicityContext = () => {
    const context = useContext(DynimicityContext)

    return context;
}

export {DynimicityProvider, useDynimicityContext}