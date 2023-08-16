
import Timer from "./Components/Timer/Timer"


import Team from "./pages/team/team"
import Auth from "./pages/auth/auth"
import Login from "./pages/auth/login"
import { Routes, Route } from "react-router-dom";
import EmpCreate from "./Components/Firm/EmpCreate"
import Category from "./Components/Category/Category"
import Project from "./Components/CreateProject/Project";



function App() {
  return (
    <>
    <TimerForm/>
    <Timer/>
    <Project/>


    <Routes>
        <Route path="/firm" element={<FirmCreate/>}/>
        <Route path="/emps" element={<EmpCreate/>}/>
        <Route path="/auth" element={<Auth />} />
        <Route path="/login" element={<Login />} />
        <Route path="/category" element={<Category />} />
        <Route path="/team" element={<Team/>} />
    </Routes>
 
    </>
  )
}

export default App;
