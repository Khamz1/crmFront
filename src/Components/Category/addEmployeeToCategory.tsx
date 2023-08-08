import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategory } from '../../features/categorySlice'; // Подставьте правильный путь к файлу с экшенами
import { addEmployeeToCategory, fetchEmployee } from '../../features/employeeSlice'; // Подставьте правильный путь к файлу с экшенами

const AddEmployeeToCategory = () => {

  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const employees = useSelector((state) => state.employees.employees);
  const categories = useSelector((state) => state.category.category);
  const dispatch = useDispatch();

  useEffect(() => {
    // Здесь вы можете добавить логику для получения списка сотрудников и категорий
    dispatch(fetchEmployee());
    dispatch(fetchCategory());
  }, [dispatch]);

  const handleEmployeeChange = (event) => {
    setSelectedEmployee(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleAddEmployeeToCategory = () => {
    if (!selectedEmployee || !selectedCategory) {
      console.error('Выберите сотрудника и категорию перед добавлением!');
      return;
    }

    dispatch(addEmployeeToCategory({selectedEmployee, selectedCategory}));

    setSelectedEmployee('');
    setSelectedCategory('');
  };


  return (
    <div>
      <select value={selectedEmployee} onChange={handleEmployeeChange}>
        <option value="">Выберите сотрудника</option>
        {employees.map((employee) => (
          <option key={employee._id} value={employee._id}>
            {employee.firstName}
          </option>
        ))}
      </select>

      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">Выберите категорию</option>
        {categories.map((category) => (
          <option key={category._id} value={category._id}>
            {category.name}
          </option>
        ))}
      </select>

      <button onClick={handleAddEmployeeToCategory}>Добавить в категорию</button>
    </div>
  );
};

export default AddEmployeeToCategory;
