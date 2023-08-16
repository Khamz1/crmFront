import React, { useState, useEffect } from "react";
import Style from "../Firm/firm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchFirms, postFirm } from "../../features/firmSlice/firmSlice";
import { postEmployees } from "../../features/employee/employee.slice";
// import PasswordGenerator from "./PasswordGenerator.tsx";

function FirmCreate() {
  const [firmName, setFirmName] = useState("");

  const firm = useSelector((state) => state.firm.firms);
  // const firms = firm.map((item) => {
  //   return item._id;
  // });

  const dispatch = useDispatch();

  const handleSetFirm = (e) => {
    setFirmName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(postFirm(firmName));
   console.log(firmName+"SASSA");
   
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
              value={firmName}
              onChange={handleSetFirm}
              type="text"
              placeholder="Введите название фирмы"
            />
          </div>
          <button onClick={handleSubmit}>Создать фирму</button>
        </form>
      </div>
    </>
  );
}

export default FirmCreate;
