import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(null); // Локальное состояние для хранения оставшегося времени

  useEffect(() => {
    // Функция для отправки GET-запроса на сервер и обновления времени
    const fetchTimeLeft = () => {
      fetch('/timer')
        .then(response => response.json())
        .then(data => {
          setTimeLeft(data.timeLeft); // Обновляем состояние с полученным временем от сервера
        })
        .catch(error => {
          console.error('Ошибка при получении данных от сервера:', error);
        });
    };

    // Выполняем функцию fetchTimeLeft сразу, чтобы получить первоначальное значение времени
    fetchTimeLeft();

    // Запускаем интервал для обновления времени каждую секунду
    const interval = setInterval(fetchTimeLeft, 1000);

    // Очищаем интервал при размонтировании компонента (перед удалением компонента из DOM)
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {timeLeft === null ? (
        <p>Таймер не запущен.</p>
      ) : (
        <p>Осталось времени: {timeLeft}</p>
      )}
    </div>
  );
};

export default Timer;
