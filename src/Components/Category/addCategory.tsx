import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAddCategory } from '../../features/categorySlice'; // Подставьте правильный путь к файлу с экшенами

const AddCategory = () => {
  const [categoryName, setCategoryName] = useState('');
  const dispatch = useDispatch();

  const handleCategoryChange = (event) => {
    setCategoryName(event.target.value);
  };

  const handleAddCategory = () => {

    dispatch(fetchAddCategory(categoryName));

    setCategoryName(''); 
  };

  return (
    <div>
      <input
        type="text"
        value={categoryName}
        onChange={handleCategoryChange}
        placeholder="Название категории"
      />
      <button onClick={handleAddCategory}>Добавить категорию</button>
    </div>
  );
};

export default AddCategory;
