import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProject } from '../../features/projectSlice'

const Main = () => {
  const project = useSelector((state) => state)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProject())
  }, [dispatch])
console.log(project);

  return (
    <div>


    </div>
  )
}

export default Main