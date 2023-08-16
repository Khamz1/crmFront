
import Timer from "./Components/Timer/Timer"



import Auth from "./pages/auth/auth"
import Login from "./pages/auth/login"
import { Routes, Route } from "react-router-dom";
import Category from "./Components/Category/Category"
import Project from "./Components/CreateProject/Project";
import Main from "./pages/Main/Main";


function App() {
  return (
    <>
      <Timer />
      <Project />
      <Main />
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/login" element={<Login />} />
        <Route path="/category" element={<Category />} />
      </Routes>

    </>
  )
}

export default App;
