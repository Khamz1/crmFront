
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAddCategory } from '../../features/categorySlice';
import styles from './category.module.scss';
import { AppDispatch } from '../../app/store';

const AddCategory: React.FC = () => {
  const [categoryName, setCategoryName] = useState<string>('');
  const dispatch: AppDispatch = useDispatch();

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryName(event.target.value);
  };

  const handleAddCategory = () => {
    dispatch(fetchAddCategory(categoryName));
    setCategoryName('');
  };

  return (
    <div>
      <input
        className={styles.input}
        type="text"
        value={categoryName}
        onChange={handleCategoryChange}
        placeholder="Название категории"
      />
      <button className={styles.button} onClick={handleAddCategory}>
        Добавить категорию
      </button>
    </div>
  );
};

export default AddCategory;
