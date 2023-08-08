
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategory } from '../../features/categorySlice';
import { addEmployeeToCategory, fetchEmployee } from '../../features/employeeSlice';
import { AppDispatch, RootState } from '../../app/store';

const AddEmployeeToCategory: React.FC = () => {
  const [selectedEmployee, setSelectedEmployee] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const employees = useSelector((state: RootState) => state.employees.employees);
  const categories = useSelector((state: RootState) => state.category.category);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmployee());
    dispatch(fetchCategory());
  }, [dispatch]);

  const handleEmployeeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedEmployee(event.target.value);
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  const handleAddEmployeeToCategory = () => {
    if (!selectedEmployee || !selectedCategory) {
      console.error('Выберите сотрудника и категорию перед добавлением!');
      return;
    }

    dispatch(addEmployeeToCategory({ selectedEmployee, selectedCategory }));

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
