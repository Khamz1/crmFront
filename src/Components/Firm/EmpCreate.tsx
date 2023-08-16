import React, { useState, useEffect } from "react";
import Style from "../Firm/firm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchFirms, postFirm } from "../../features/firmSlice/firmSlice";
import { postEmployees } from "../../features/employee/employee.slice";
// import PasswordGenerator from "./PasswordGenerator.tsx";

function EmpCreate() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState([]);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const [passwordLength, setPasswordLength] = useState(20);

  const firm = useSelector((state) => state.firm.firms);
  const firmName = firm.map((item) => {
    return item._id + 1;
  });

  const generatePassword = (e) => {
    e.preventDefault();
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*()-_=+[{]}|;:,.<>?";

    // Комбинируем все символы в одну строку
    const allChars =
      lowercaseChars + uppercaseChars + numberChars + specialChars;

    let generatedLogin = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      generatedLogin += allChars[randomIndex];
    }

    let generatedPassword = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      generatedPassword += allChars[randomIndex];
    }
    setLogin(generatedLogin);

    setPassword(generatedPassword);
  };

  const dispatch = useDispatch();

  const handleSetEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSetFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleSetSecondName = (e) => {
    setSecondName(e.target.value);
  };
  const handleSetRole = (e) => {
    setRole(e.target.value);
  };
  const handleSetLogin = (e) => {
    setLogin(e.target.value);
  };
  const handleSetPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSetImage = (e) => {
    setImage(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(
      postEmployees({
        email,
        firstName,
        secondName,
        image,
        role,
        login,
        password,
        firm: firmName,
      })
    );
  };

  useEffect(() => {
    dispatch(fetchFirms());
  }, [dispatch]);

  return (
    <>
      <div className={Style.firmMain}>
        <form onSubmit={handleSubmit} className={Style.formClass}>
          <div className={Style.createEmployeeAndFirm}>
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
            <button onClick={generatePassword}>Сгенерировать</button>
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

            <button onClick={handleSubmit}>Создать сотрудника</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default EmpCreate;
