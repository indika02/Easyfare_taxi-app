
import Home from "./Components/Home";
import { BrowserRouter,Routes, Route } from "react-router-dom";

import PassengerAccount from "../src/Components/UserAccount/PassengerAccount";
import DriverAccount from "../src/Components/UserAccount/DriverAccount";
import DriverAccountLogger from "../src/Components/AcountLoggerAndRegister/AccountLogger/DriverAccount";
import PassengerAccountLogger from "../src/Components/AcountLoggerAndRegister/AccountLogger/PassengerAccount";
import DriverAccountRegister from "../src/Components/AcountLoggerAndRegister/AccountRegister/DriverAccount";
import PassengerAccountRegister from "../src/Components/AcountLoggerAndRegister/AccountRegister/PassengerAccount";
import ProtectedRouting  from "../src/Components/AcountLoggerAndRegister/ProtectedRouting";

import { useDispatch , useSelector } from "react-redux";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/DriverAccountLogger" element={<DriverAccountLogger />} />        
        <Route path="/PassengerAccountLogger" element={<PassengerAccountLogger />} />
        <Route path="/DriverAccountRegister" element={<DriverAccountRegister />} />
        <Route path="/PassengerAccountRegister" element={<PassengerAccountRegister />} />
        
        <Route element = {<ProtectedRouting Auth={useSelector((state)=>state.Auth.isLogged)}/>}>         
        <Route path="/PassengerAccount" element={<PassengerAccount />} />
        <Route path="/DriverAccount" element={<DriverAccount />} />         
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
