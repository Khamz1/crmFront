import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postProject } from '../../features/projectSlice';

const Project = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [totalDays, setTotalDays] = useState(0);

  const handleStartDateChange = (event) => {
    const newStartDate = new Date(event.target.value);
    console.log(newStartDate);
    
    setStartDate(newStartDate);
    calculateTotalDays(newStartDate, endDate);
  };

  const handleEndDateChange = (event) => {
    const newEndDate = new Date(event.target.value);
    console.log(newEndDate);
    
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

  const dispatch = useDispatch()

  const handleSendTime = () => {
    dispatch(postProject({startTime: startDate, endTime:endDate}))
  }

  return (
    <div>
      <div>
        начало: <input type="date" onChange={handleStartDateChange} />
      </div>
      <div>
        конец: <input type="date" onChange={handleEndDateChange} />
      </div>
      <div>Общее количество дней: {totalDays}</div>
      <button onClick={handleSendTime}>sendt time</button>
    </div>
  );
};

export default Project;
