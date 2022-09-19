import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v1 } from 'uuid'
import { AddItemForm } from './addItemForm/AddItemForm'
import './App.css'
import { AppRootStateType } from './redux/store'
import { addTodolistTasksAC, TasksType } from './todolist/task/TaskReduser'
import { Todolist } from './todolist/Todolist'
import { addTodolistAC, TodolistType } from './todolist/TodolistReduser'

const App = () => {
  console.log('render APP')
  const dispatch = useDispatch()
  const todolists = useSelector<AppRootStateType, Array<TodolistType>>(state => state.todolists)
  const tasks = useSelector<AppRootStateType, TasksType>(state => state.tasks)

  const addTodolist = useCallback((todolistTitle: string) => {
    const newTodolistID = v1()
    dispatch(addTodolistAC(todolistTitle, newTodolistID))
    dispatch(addTodolistTasksAC(todolistTitle, newTodolistID))
  }, [])

  const todolistsData = todolists.map(todolist => {
    let filteredTasks = tasks[todolist.id]
    return (
      <Todolist key={todolist.id} todolistID={todolist.id} tasks={filteredTasks} title={todolist.title} filterValue={todolist.filter} />
    )
  })

  return (
    <div className='app'>
      <AddItemForm addItem={addTodolist} />
      {todolistsData}
    </div>
  )
}
export default App
