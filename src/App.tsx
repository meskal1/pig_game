import React, { useState } from 'react'
import { v1 } from 'uuid'
import './App.css'
import { TaskType, Todolist } from './Todolist'

export type FilterValuesType = 'all' | 'active' | 'completed'
type TodolistsType = {
  id: string
  title: string
  filter: string
}
type TasksType = {
  [key: string]: Array<TaskType>
}

function App() {
  let todolistID1 = v1()
  let todolistID2 = v1()
  let [todolists, setTodolists] = useState<Array<TodolistsType>>([
    { id: todolistID1, title: 'What to learn', filter: 'all' },
    { id: todolistID2, title: 'What to buy', filter: 'all' },
  ])
  let [tasks, setTasks] = useState<TasksType>({
    [todolistID1]: [
      { id: v1(), title: 'HTML&CSS', isDone: true },
      { id: v1(), title: 'JS', isDone: true },
      { id: v1(), title: 'ReactJS', isDone: false },
    ],
    [todolistID2]: [
      { id: v1(), title: 'Rest API', isDone: true },
      { id: v1(), title: 'GraphQL', isDone: false },
    ],
  })

  const removeTask = (taskID: string, todolistID: string) => {
    tasks[todolistID] = tasks[todolistID].filter(taskElement => taskElement.id !== taskID)
    setTasks({ ...tasks })
  }

  const addTask = (todolistID: string, taskTitle: string) => {
    tasks[todolistID] = [{ id: v1(), title: taskTitle, isDone: false }, ...tasks[todolistID]]
    setTasks({ ...tasks })
  }

  const changeTaskStatus = (taskID: string, todolistID: string, isDone: boolean) => {
    tasks[todolistID] = tasks[todolistID].map(taskElement =>
      taskElement.id === taskID ? { ...taskElement, isDone: !isDone } : taskElement
    )
    setTasks({ ...tasks })
  }

  const setTaskFilterValue = (todolistID: string, filterValue: FilterValuesType) => {
    setTodolists(todolists.map(todolist => (todolist.id === todolistID ? { ...todolist, filter: filterValue } : todolist)))
  }

  const removeTodolist = (todolistID: string) => {
    setTodolists(todolists.filter(todolist => todolist.id !== todolistID))
    delete tasks[todolistID]
    setTasks({ ...tasks })
  }

  const todoLists = todolists.map(todolist => {
    let filteredTasks = tasks[todolist.id]
    if (todolist.filter === 'active') filteredTasks = filteredTasks.filter(taskElement => taskElement.isDone === false)
    if (todolist.filter === 'completed') filteredTasks = filteredTasks.filter(taskElement => taskElement.isDone === true)
    return (
      <Todolist
        key={todolist.id}
        todolistID={todolist.id}
        title={todolist.title}
        tasks={filteredTasks}
        removeTask={removeTask}
        addTask={addTask}
        changeTaskStatus={changeTaskStatus}
        filterValue={todolist.filter}
        filterTasks={setTaskFilterValue}
        removeTodolist={removeTodolist}
      />
    )
  })

  return <div className='app'>{todoLists}</div>
}
export default App
