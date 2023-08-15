import Select from "react-select";
import { useEffect, useState } from "react";
import { RootState } from "../../app/store";
import styles from "./team.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployee } from "../../features/employeeSlice";
import { addTeam } from "../../features/team/teamSlice";

function Team() {
  const employees = useSelector(
    (state: RootState) => state.employees.employees
  );

  //   const teamss = useSelector(
  //     (state: RootState) => state.team.team.map((item) => item._id)
  //   );

  // const [teamID, setTeamID] = useState<any>("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEmployee());
  }, [dispatch]);

  const [employee, setEmployee] = useState<any>([]);

  const employeeID = employee.map((item: any) => item._id);

  console.log(employeeID);

  const handleChange = (e: any) => {
    setEmployee(
      isMulti
        ? e.map((c: any) => {
            return JSON.parse(c.value);
          })
        : e.value
    );
  };

  const isMulti = true;

  const [textInput, setTextInput] = useState("");
  const handleInput = (e: any) => {
    setTextInput(e.target.value);
  };

  const handleSaveTeam = () => {
    if (textInput === "") {
      alert("Введите имена командой");
      return;
    }

    if (employee.length === 0) {
      alert("Выберите сотрудников");
      return;
    }

    dispatch(addTeam({ textInput, employeeID }));
    setTextInput("");
  };

  return (
    <div className={styles.team}>
      <div className={styles.team_name}>
        <span>Имя команды:</span>
        <input
          onChange={handleInput}
          value={textInput}
          type="text"
          placeholder="Введите имя команды"
        />
      </div>
      <Select
        onChange={(e) => handleChange(e)}
        placeholder={"-- Выберите сотрудника --"}
        isMulti={isMulti}
        options={employees.map((item) => {
          return {
            value: JSON.stringify(item),
            label: item.firstName,
          };
        })}
      />

      <div className={styles.employee_li}>
        {employee.map((item: any) => {
          return (
            
            <ul>
              <li>
                <span>Имя: </span> {item.firstName}
              </li>
              <li>
                <span>Email: </span>
                {item.email}
              </li>
              <li>
                <span>Role:</span> {item.role}
              </li>
            </ul>
          );
        })}
      </div>
      <div className={styles.btn}>
      <button className={styles.btn_team} onClick={handleSaveTeam}>Создать команду</button>
      </div>
      
    </div>
  );
}

export default Team;
