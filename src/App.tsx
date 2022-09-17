import React, { useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v1 } from 'uuid'
import { AddItemForm } from './AddItemForm'
import './App.css'
import { AppRootStateType } from './redux/store'
import { addTodolistTasksAC, tasksReducer, TasksType } from './TasksReduser'
import { Todolist } from './Todolist'
import { addTodolistAC, todolistsReducer, TodolistsType } from './TodolistsReduser'

function App() {
  const dispatch = useDispatch()
  const todolists = useSelector<AppRootStateType, Array<TodolistsType>>(state => state.todolists)
  const tasks = useSelector<AppRootStateType, TasksType>(state => state.tasks)

  //   let todolistID1 = v1()
  //   let todolistID2 = v1()
  //   let [todolists, todolistsDispatch] = useReducer(todolistsReducer, [
  //     { id: todolistID1, title: 'What to learn', filter: 'all' },
  //     { id: todolistID2, title: 'What to buy', filter: 'all' },
  //   ])
  //   let [tasks, tasksDispatch] = useReducer(tasksReducer, {
  //     [todolistID1]: [
  //       { id: v1(), title: 'HTML&CSS', isDone: true },
  //       { id: v1(), title: 'JS', isDone: true },
  //       { id: v1(), title: 'ReactJS', isDone: false },
  //     ],
  //     [todolistID2]: [
  //       { id: v1(), title: 'Rest API', isDone: true },
  //       { id: v1(), title: 'GraphQL', isDone: false },
  //     ],
  //   })

  const addTodolist = (todolistTitle: string) => {
    const todolistID = v1()
    dispatch(addTodolistAC(todolistTitle, todolistID))
    dispatch(addTodolistTasksAC(todolistTitle, todolistID))
  }

  const todoLists = todolists.map(todolist => {
    let filteredTasks = tasks[todolist.id]
    if (todolist.filter === 'active') filteredTasks = filteredTasks.filter(taskElement => taskElement.isDone === false)
    if (todolist.filter === 'completed') filteredTasks = filteredTasks.filter(taskElement => taskElement.isDone === true)
    return (
      <Todolist key={todolist.id} todolistID={todolist.id} title={todolist.title} tasks={filteredTasks} filterValue={todolist.filter} />
    )
  })

  return (
    <div className='app'>
      <AddItemForm addItem={addTodolist} />
      {todoLists}
    </div>
  )
}
export default App
