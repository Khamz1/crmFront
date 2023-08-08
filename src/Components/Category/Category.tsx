import React from 'react'
import AddCategory from './addCategory'
import AddEmployeeToCategory from './AddEmployeeToCategory'
import CategoryList from './categoryList'

export default function category() {
  return (
    <div>
        <AddCategory />
        <AddEmployeeToCategory />
        <CategoryList />
    </div>
  )
}
