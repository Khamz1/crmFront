import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../../features/categorySlice";
import { fetchEmployee } from "../../features/employeeSlice";

const Category = () => {
  const dispatch = useDispatch();

  const category = useSelector((state) => state.category.category);
  const employees = useSelector((state) => state.employees.employees);
 

  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(fetchEmployee());
  }, [dispatch]);

  const [selectedCategory, setSelectedCategory] = useState("");


  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

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

export default Category;
