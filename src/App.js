import Banner from "./Components/Banner";
import CentralBox from "./Components/CentralBox";
import { DynimicityProvider } from "./Context/useDynimicityContext";
import './global.css'

function App() {
  return (
    <>
      <DynimicityProvider>
        <CentralBox/>
        <Banner/>
      </DynimicityProvider>
    </>
  );
}

export default App;
