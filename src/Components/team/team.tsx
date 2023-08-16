import Select from "react-select";
import { useEffect, useState } from "react";
import { RootState } from "../../app/store";
import styles from "./team.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployee } from "../../features/employeeSlice";

function Team() {
  const employees = useSelector(
    (state: RootState) => state.employees.employees
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEmployee());
  }, [dispatch]);

  const [employee, setEmployee] = useState <any>([]);




  const handleChange = (e: any) => {
    setEmployee( isMulti ? e.map((c: any) => c.value) : e.value);
    JSON.parse(e.value)
  };

  const isMulti = true;


  

  return (
    <div className={styles.team}>
      {/* <div className="team_name">
      <span>
        Имя команды <input type="text" placeholder="Имя команды" />
      </span>
    </div>
    <label>
      Выберите сотрудника:
      <select onChange={(e) => handleChange(e)} value={employee}>
        <option>{employee ? employee.firstName : "-- Выберите сотрудника --  "  }</option>
        {employees.map((item) => (
          <option key={item._id} value={JSON.stringify(item)} >
            {item.firstName}
            <input type="checkbox" name="category" value="1" />
          </option>
        ))}
        
      </select>
  
    </label>
    {
      employee &&
      <div>
        <div>Имя: {employee.firstName}</div>
        <div>Email: {employee.email}</div>
        <div>categ: {employee.category.name}</div>
      </div>
    } */}

      <Select
        onChange={(e) => handleChange(e)}
        placeholder={'-- Выберите сотрудника --'}
        isMulti = {isMulti}
        options={employees.map((item) => {
          return {
            value: JSON.stringify(item),
            label: item.firstName,
       
          };
        })}
      />
   
<div>
  
 {employee.map((item: any) => {
return (
  <ul>
  <li>Имя: {item.firstName}</li>
  </ul>
)

} )} 
       
</div>
    </div>
  );
}

export default Team;
