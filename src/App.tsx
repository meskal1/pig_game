import React, { useState } from 'react'
import { v1 } from 'uuid'
import './App.css'
import { Todolist } from './Todolist'

export type FilterValuesType = 'all' | 'active' | 'completed'

function App() {
  console.log('render app')
  const [tasks, setTasks] = useState([
    { id: v1(), title: 'HTML&CSS', isDone: true },
    { id: v1(), title: 'JS', isDone: true },
    { id: v1(), title: 'ReactJS', isDone: false },
    { id: v1(), title: 'MongoDB', isDone: false },
    { id: v1(), title: 'Rest API', isDone: false },
  ])
  const [filterValue, setFilterValue] = useState<FilterValuesType>('all')
  let filteredTasks = tasks
  if (filterValue === 'all') filteredTasks = tasks
  if (filterValue === 'active') filteredTasks = tasks.filter(taskElement => taskElement.isDone === false)
  if (filterValue === 'completed') filteredTasks = tasks.filter(taskElement => taskElement.isDone === true)

  const removeTask = (id: string) => {
    setTasks(tasks.filter(taskElement => taskElement.id !== id))
  }
  const addTask = (title: string) => {
    setTasks([{ id: v1(), title, isDone: false }, ...tasks])
  }
  const changeTaskStatus = (id: string, isDone: boolean) => {
    setTasks(tasks.map(taskElement => (taskElement.id === id ? { ...taskElement, isDone: !isDone } : taskElement)))
  }

  return (
    <div className='app'>
      <Todolist
        title={'What to learn'}
        tasks={filteredTasks}
        removeTask={removeTask}
        addTask={addTask}
        filterTasks={setFilterValue}
        changeTaskStatus={changeTaskStatus}
        filterValue={filterValue}
      />
    </div>
  )
}
export default App
