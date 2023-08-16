
import Timer from "./Components/Timer/Timer"


import Team from "./pages/team/team"
import Auth from "./pages/auth/auth"
import Login from "./pages/auth/login"
import { Routes, Route } from "react-router-dom";
import Category from "./Components/Category/Category"
import Project from "./Components/CreateProject/Project";


function App() {
  return (
    <>
    <Timer/>
    <Project/>

    <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/login" element={<Login />} />
        <Route path="/category" element={<Category />} />
        <Route path="/team" element={<Team/>} />
    </Routes>
 
    </>
  )
}

export default App;
