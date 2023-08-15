import Timer from "./Components/Timer/Timer"
import TimerForm from "./Components/TimerForm/TimerForm"
import Team from "./pages/team/team"
import FirmCreate from "./Components/Firm/FirmCreate"
import Auth from "./pages/auth/auth"
import Login from "./pages/auth/login"
import { Routes, Route } from "react-router-dom";
import Category from "./Components/Category/Category"


function App() {

  return (
    <>
    <TimerForm/>
    <Timer/>
    <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/login" element={<Login />} />
        <Route path="/category" element={<Category />} />
        <Route path="/team" element={<Team/>} />
    </Routes>
 
    </>
  )
}

export default App
