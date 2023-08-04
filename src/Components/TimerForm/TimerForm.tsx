import React, { useState } from 'react';

const TimerForm = () => {
  const [duration, setDuration] = useState(''); // Локальное состояние для хранения введенной длительности

  const handleSubmit = (event) => {
    event.preventDefault();

    // Отправка POST-запроса на сервер с использованием fetch
    fetch('/start-timer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ duration: parseInt(duration, 10) }), // Преобразуем длительность в число и передаем в теле запроса
    })
      .then(response => response.json())
      .then(data => {
        console.log(data); // Выводим ответ от сервера в консоль (здесь может быть обработка результата, если необходимо)
      })
      .catch(error => {
        console.error('Ошибка при отправке запроса:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Длительность проекта (количество дней):
        <input
          type="number"
          value={duration}
          onChange={(event) => setDuration(event.target.value)}
          required
          min="1"
        />
      </label>
      <button type="submit">Запустить таймер</button>
    </form>
  );
};

export default TimerForm;
