import React from 'react'
import { useDispatch } from 'react-redux'
import { AddItemForm } from './AddItemForm'
import { EditableSpan } from './EditableSpan'
import { addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, removeTodolistTasksAC } from './TasksReduser'
import s from './Todolist.module.scss'
import { changeTodolistTitleAC, removeTodolistAC, tasksFilterValueAC } from './TodolistsReduser'

type TaskType = {
  id: string
  title: string
  isDone: boolean
}
type TodolistType = {
  todolistID: string
  title: string
  tasks: Array<TaskType>
  filterValue: string
}

export const Todolist: React.FC<TodolistType> = ({ todolistID, title, tasks, filterValue }) => {
  const dispatch = useDispatch()
  const tasksData = tasks.map(taskElement => {
    const onClickButtonHandler = () => dispatch(removeTaskAC(taskElement.id, todolistID))
    const onChangeInputHandler = () => dispatch(changeTaskStatusAC(taskElement.id, todolistID, taskElement.isDone))
    const onChangeTaskTitle = (taskTitle: string) => dispatch(changeTaskTitleAC(todolistID, taskElement.id, taskTitle))
    return (
      <li key={taskElement.id} className={taskElement.isDone ? s.completed : ''}>
        <input type='checkbox' checked={taskElement.isDone} onChange={onChangeInputHandler} />
        <EditableSpan itemTitle={taskElement.title} onChange={onChangeTaskTitle} />
        <button onClick={onClickButtonHandler}>X</button>
      </li>
    )
  })
  const onChangeTodolistTitle = (todolistTitle: string) => dispatch(changeTodolistTitleAC(todolistID, todolistTitle))
  const onClickAddTaskHandler = (taskTitle: string) => dispatch(addTaskAC(todolistID, taskTitle))
  const onAllClickHandler = () => dispatch(tasksFilterValueAC(todolistID, 'all'))
  const onActiveClickHandler = () => dispatch(tasksFilterValueAC(todolistID, 'active'))
  const onCompletedClickHandler = () => dispatch(tasksFilterValueAC(todolistID, 'completed'))
  const onClickRemoveHandler = () => {
    dispatch(removeTodolistAC(todolistID))
    dispatch(removeTodolistTasksAC(todolistID))
  }
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h3>
          <EditableSpan itemTitle={title} onChange={onChangeTodolistTitle} />
        </h3>
        <button style={{ width: '20px', height: '20px', margin: '0 0 0 10px' }} onClick={onClickRemoveHandler}>
          X
        </button>
      </div>
      <AddItemForm addItem={onClickAddTaskHandler} />
      <ul>{tasksData}</ul>
      <div>
        <button className={filterValue === 'all' ? s.active : ''} onClick={onAllClickHandler}>
          All
        </button>
        <button className={filterValue === 'active' ? s.active : ''} onClick={onActiveClickHandler}>
          Active
        </button>
        <button className={filterValue === 'completed' ? s.active : ''} onClick={onCompletedClickHandler}>
          Completed
        </button>
      </div>
    </div>
  )
}
