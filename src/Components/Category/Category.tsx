
import AddCategory from './addCategory'
import AddEmployeeToCategory from './addEmployeeToCategory'
import CategoryList from './categoryList'
import styles from './category.module.scss'

export default function category() {
  return (
    <div className={styles.box}>
        <AddCategory />
        <AddEmployeeToCategory />
        <CategoryList />
    </div>
  )
}
