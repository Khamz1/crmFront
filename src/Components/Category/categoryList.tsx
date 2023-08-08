
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../../features/categorySlice";
import { fetchEmployee } from "../../features/employeeSlice";
import { AppDispatch, RootState } from "../../app/store";

const CategoryList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const category = useSelector((state: RootState) => state.category.category);
  const employees = useSelector((state: RootState) => state.employees.employees);

  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(fetchEmployee());
  }, [dispatch]);

  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };
console.log(category);

  return (
    <div>
      <label>
        Выберите категорию:
        <select onChange={(e) => handleChange(e)} value={selectedCategory}>
          <option>Выберите категорию</option>
          {category.map((item) => (
            <option key={item._id} value={item._id}>
              {item.name}
            </option>
          ))}
        </select>
      </label>
      <h2>Сотрудники</h2>
      <ul>
        {employees.map((item) => (
          item.category === selectedCategory && (
            <li key={item._id}>{item.firstName}</li>
          )
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
