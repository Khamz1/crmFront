import Timer from "./Components/Timer/Timer"
import TimerForm from "./Components/TimerForm/TimerForm"

import FirmCreate from "./Components/Firm/FirmCreate"


import Auth from "./pages/auth/auth"
import Login from "./pages/auth/login"
import { Routes, Route } from "react-router-dom";
import Category from "./Components/Category"
import EmpCreate from "./Components/Firm/EmpCreate"



function App() {

  return (
    <>

    <TimerForm/>
    {/* <Timer/> */}
    <Routes>
        <Route path="/firm" element={<FirmCreate/>}/>
        <Route path="/emps" element={<EmpCreate/>}/>
        <Route path="/auth" element={<Auth />} />
        <Route path="/login" element={<Login />} />
        <Route path="/category" element={<Category />} />
    </Routes>

    </>
  )
}

export default App
