import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postProject } from '../../features/projectSlice';
import styles from './styles.module.scss';
import { fetchEmployees } from '../../features/employee/employee.slice';

const Project = () => {
  const employees = useSelector((state) => state.employee.employees);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [totalDays, setTotalDays] = useState(0);
  const [projectName, setProjectName] = useState('')
  const [email, setEmail] = useState('')
  const [adres, setAdres] = useState('')
  const [company, setCompany] = useState('')
  const [projectManager, setProjectManager] = useState('')

  

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);


  const handleStartDateChange = (event) => {
    const newStartDate = new Date(event.target.value);

    setStartDate(newStartDate);
    calculateTotalDays(newStartDate, endDate);
  };

  const handleEndDateChange = (event) => {
    const newEndDate = new Date(event.target.value);

    setEndDate(newEndDate);
    calculateTotalDays(startDate, newEndDate);
  };

  const calculateTotalDays = (start, end) => {
    if (start && end) {
      const timeDifference = end - start;
      const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
      setTotalDays(daysDifference);
    }
  };

  const handleSendTime = (event) => {
    event.preventDefault();
    // Создаем объект с данными из инпутов
    const projectData = {
      name: projectName,
      emailCustomer: email,
      addressCustomer: adres,
      typeCompany: company,
      startTime: startDate,
      endTime: endDate,
      projectManager:projectManager
    };
    dispatch(postProject(projectData));
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input type="text" placeholder='Название проекта' value={projectName} onChange={(e) => setProjectName(e.target.value)} />
        <input type="text" placeholder='Email заказчика' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="text" placeholder='Адрес заказчика' value={adres} onChange={(e) => setAdres(e.target.value)} />
        <input type="text" placeholder='Компания, физ лицо' value={company} onChange={(e) => setCompany(e.target.value)} />
        <label htmlFor="">Ответсвенный за проект: </label>
        <select name="" id="" onChange={(e) => setProjectManager(e.target.value)}>
          {employees.map((item) => (
            <option key={item._id} value={item._id} >
              {item.firstName} - {item.email}
            </option>
          ))}
        </select>
        <div className={styles.date}>
          <div className={styles.span}>
            начало: <input type="date" onChange={handleStartDateChange} />
          </div>
          <div className={styles.span}>
            конец: <input type="date" onChange={handleEndDateChange} />
          </div>
        </div>
        <div>
          <div>Общее количество дней: {totalDays}</div>
          <button onClick={handleSendTime}>sendt time</button>
        </div>
      </form>
    </div>
  );
};

export default Project;
