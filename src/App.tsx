import Timer from "./Components/Timer/Timer"
import TimerForm from "./Components/TimerForm/TimerForm"
import Auth from "./pages/auth/auth"
import Login from "./pages/auth/login"
import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
    <TimerForm/>
    <Timer/>
    <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/login" element={<Login />} />
    </Routes>
    </>
  )
}

export default App
