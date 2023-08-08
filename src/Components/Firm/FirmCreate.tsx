import React, { useState, useEffect } from "react";
import Style from "../Firm/firm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchFirms, postFirm } from "../../features/firmSlice/firmSlice";
import { postEmployees } from "../../features/employee/employee.slice";

function FirmCreate() {
  const [firmName, setFirmName] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState([]);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
//   const firm = useSelector((state)=>state.firm.firms)
  
  const dispatch = useDispatch()

  const handleSetFirm=(e)=>{
    setFirmName(e.target.value)
  }
  const handleSetEmail=(e)=>{
    setEmail(e.target.value)
  }
  const handleSetFirstName=(e)=>{
    setFirstName(e.target.value)
  }
  const handleSetSecondName=(e)=>{
    setSecondName(e.target.value)
  }
  const handleSetRole=(e)=>{
    setRole(e.target.value)
  }
  const handleSetLogin=(e)=>{
    setLogin(e.target.value)
  }
  const handleSetPassword=(e)=>{
    setPassword(e.target.value)
  }
  const handleSetToken=(e)=>{
    setToken(e.target.value)
  }
  
  const handleSetImage=(e)=>{
    setImage(e.target.files)
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(postFirm(firmName));
    const ernest ={ email,
      firstName, 
      secondName,
       image,
       role,
       login,
       password,
       token}
    dispatch(postEmployees(
       ernest 
    ))
    

    console.log(firmName);
    
  }

  useEffect(() => {
    dispatch(fetchFirms());
  }, [dispatch]);
  
  return (
    <>
    <div className={Style.firmMain}>
        <form onSubmit={handleSubmit} className={Style.formClass}>
        <div className={Style.createEmployeeAndFirm}>
        <input
value={firmName}
onChange={handleSetFirm}
type="text"
placeholder="Введите название фирмы"
/>
<input
value={email}
onChange={handleSetEmail}
type="text"
placeholder="введите email сотрудника"
/>
<input
value={firstName}
onChange={handleSetFirstName}
type="text"
placeholder="Введите имя сотрудника"
/>
<input
value={secondName}
onChange={handleSetSecondName}
type="text"
placeholder="Введите фамилию сотрудника"
/>
<input
value={role}
onChange={handleSetRole}
type="text"
placeholder="Введите должность сотрудника"
/>
<input type="file" onChange={handleSetImage} multiple />
</div>
<br />
<div className={Style.generatorWindow}>
<button>Сгенерировать</button>
<input
type="text"
onChange={handleSetLogin}
value={login}
placeholder="Логин сотрудника"
/>
<input
type="text"
onChange={handleSetPassword}
value={password}
placeholder="Пароль сотрудника"
/>
<input
type="text"
onChange={handleSetToken}
value={token}
placeholder="Токен сотрудника"
/>
<button>Создать сотрудника</button>
        </div>
        </form>
      
    </div>
    </>
  );
}

export default FirmCreate;


