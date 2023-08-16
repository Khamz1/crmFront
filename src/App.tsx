import Timer from "./Components/Timer/Timer";

import Team from "./pages/team/team";
import Auth from "./pages/auth/auth";
import Login from "./pages/auth/login";
import { Routes, Route } from "react-router-dom";
import EmpCreate from "./Components/Firm/EmpCreate";
import Category from "./Components/Category/Category";
import Project from "./Components/CreateProject/Project";


import FirmCreate from "./Components/Firm/FirmCreate";


function App() {
  return (
    <>



      <Routes>
        <Route path="/" element={<Project />} />
        <Route path="/firm" element={<FirmCreate />} />
        <Route path="/emps" element={<EmpCreate />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/login" element={<Login />} />
        <Route path="/category" element={<Category />} />
        <Route path="/team" element={<Team />} />
           <Route path="/projects" element={<Projects/>}/>
        <Route path="/project" element={<Project/>}/>
      </Routes>
    </>
  );
}

export default App;
