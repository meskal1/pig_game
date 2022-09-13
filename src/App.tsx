import React, { useState } from 'react'
import './App.css'
import { Todolist } from './Todolist'

export type FilterValuesType = 'all' | 'active' | 'completed'

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'HTML&CSS', isDone: true },
    { id: 2, title: 'JS', isDone: true },
    { id: 3, title: 'ReactJS', isDone: false },
    { id: 4, title: 'MongoDB', isDone: false },
    { id: 5, title: 'Rest API', isDone: false },
  ])
  const removeTask = (id: number) => {
    setTasks(tasks.filter(el => el.id !== id))
  }
  const [filteredTasks, setFilteredTasks] = useState(tasks)
  const filterTasks = (filterValue: FilterValuesType) => {
    if (filterValue === 'all') setFilteredTasks(tasks)
    if (filterValue === 'active') setFilteredTasks(tasks.filter(el => el.isDone === false))
    if (filterValue === 'completed') setFilteredTasks(tasks.filter(el => el.isDone === true))
  }

  return (
    <div className='App'>
      <Todolist title={'What to learn'} tasks={filteredTasks} removeTask={removeTask} filterTasks={filterTasks} />
    </div>
  )
}
export default App
