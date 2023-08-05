import { useDispatch, useSelector } from 'react-redux';
import { startTimer, stopTimer, resetTimer, updateTimer } from '../../features/timerSlice';
import { useEffect, useState } from 'react';

const Timer = () => {
  const dispatch = useDispatch();
  const { startTime, endTime, isRunning } = useSelector((state) => state.timer);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [projectEndDate, setProjectEndDate] = useState(null);
  let intervalId = null;

  const handleStart = () => {
    dispatch(startTimer());
  };

  const handleStop = () => {
    dispatch(stopTimer());
  };

  const handleReset = () => {
    dispatch(resetTimer());
  };

  const formatTime = (isoString) => {
    const date = new Date(isoString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `${year}-${padNumber(month)}-${padNumber(day)} ${padNumber(hours)}:${padNumber(minutes)}:${padNumber(seconds)}`;
  };

  const padNumber = (number) => {
    return number.toString().padStart(2, '0');
  };

  useEffect(() => {
    if (isRunning) {
      intervalId = setInterval(() => {
        const currentTime = new Date();

        if (projectEndDate && currentTime >= projectEndDate) {
          alert('Срок проекта подошел к концу!');
          setProjectEndDate(null);
          clearInterval(intervalId);
        }

        dispatch(updateTimer());
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning, projectEndDate]);

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    const newEndDate = e.target.value;
    setEndDate(newEndDate);
    const newProjectEndDate = new Date(newEndDate);
    setProjectEndDate(newProjectEndDate);
    dispatch(updateTimer({ endTime: newProjectEndDate.toISOString() }));
  };

  return (
    <div>
      <h1>Timer App</h1>
      <div>
        <label htmlFor="start-date">Start Date:</label>
        <input type="datetime-local" id="start-date" value={startDate} onChange={handleStartDateChange} />
      </div>
      <div>
        <label htmlFor="end-date">End Date:</label>
        <input type="datetime-local" id="end-date" value={endDate} onChange={handleEndDateChange} />
      </div>
      {startTime && <p>Start time: {formatTime(startTime)}</p>}
      {endTime && <p>End time: {formatTime(endTime)}</p>}
      <button onClick={handleStart} disabled={isRunning}>
        Start
      </button>
      <button onClick={handleStop} disabled={!isRunning}>
        Stop
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Timer;
