import React from 'react'
import { AddItemForm } from './AddItemForm'
import { FilterValuesType } from './App'
import { EditableSpan } from './EditableSpan'
import s from './Todolist.module.scss'

export type TaskType = {
  id: string
  title: string
  isDone: boolean
}
type TodolistType = {
  todolistID: string
  title: string
  tasks: Array<TaskType>
  removeTask: (taskID: string, todolistID: string) => void
  filterTasks: (todolistID: string, filterValue: FilterValuesType) => void
  addTask: (todolistID: string, taskTitle: string) => void
  changeTaskStatus: (taskID: string, todolistID: string, isDone: boolean) => void
  filterValue: string
  removeTodolist: (todolistID: string) => void
  changeTaskTitle: (todolistID: string, taskID: string, taskTitle: string) => void
  changeTodolistTitle: (todolistID: string, todolistTitle: string) => void
}

export const Todolist: React.FC<TodolistType> = ({
  todolistID,
  title,
  tasks,
  removeTask,
  filterTasks,
  addTask,
  changeTaskStatus,
  filterValue,
  removeTodolist,
  changeTaskTitle,
  changeTodolistTitle,
}) => {
  const tasksData = tasks.map(taskElement => {
    const onClickButtonHandler = () => removeTask(taskElement.id, todolistID)
    const onChangeInputHandler = () => changeTaskStatus(taskElement.id, todolistID, taskElement.isDone)
    const onChangeTaskTitle = (taskTitle: string) => changeTaskTitle(todolistID, taskElement.id, taskTitle)
    return (
      <li key={taskElement.id} className={taskElement.isDone ? s.completed : ''}>
        <input type='checkbox' checked={taskElement.isDone} onChange={onChangeInputHandler} />
        <EditableSpan itemTitle={taskElement.title} onChange={onChangeTaskTitle} />
        <button onClick={onClickButtonHandler}>X</button>
      </li>
    )
  })
  const onChangeTodolistTitle = (todolistTitle: string) => changeTodolistTitle(todolistID, todolistTitle)
  const onClickAddTaskHandler = (taskTitle: string) => addTask(todolistID, taskTitle)
  const onAllClickHandler = () => filterTasks(todolistID, 'all')
  const onActiveClickHandler = () => filterTasks(todolistID, 'active')
  const onCompletedClickHandler = () => filterTasks(todolistID, 'completed')
  const onClickRemoveHandler = () => removeTodolist(todolistID)
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
