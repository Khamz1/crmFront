import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProject } from '../../features/projectSlice';
import styles from './styles.module.scss';
import Timer from '../../Components/Timer/Timer'; // Подставьте корректный путь к Timer

const Main = () => {
  const project = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProject());
  }, [dispatch]);

  const projects = project.projects.projects;

  return (
    <div className={styles.cards}>
      {projects?.map((item) => (
        <div key={item.id} className={styles.card}>
          <div className={styles.manager}>
            <div className={styles.mr}>Ответственный за проект - </div>
            <div>{item.projectManager?.firstName}</div>
          </div>
          <div>{item.name}</div>
          <div>{item.typeCompany}</div>
          <div>Количество дней - {item.totalDays}</div>
          <div>Здесь должен быть таймер</div>
          <Timer initialTime={item.totalDays * 24 * 60 * 60} />
        </div>
      ))}
    </div>
  );
};

export default Main;
