import React, { ChangeEvent, useState, KeyboardEvent } from 'react'
import { FilterValuesType } from './App'
import s from './Todolist.module.scss'

type TasksType = {
  id: string
  title: string
  isDone: boolean
}
type TodolistType = {
  title: string
  tasks: Array<TasksType>
  removeTask: (id: string) => void
  filterTasks: (filterValue: FilterValuesType) => void
  addTask: (title: string) => void
  changeTaskStatus: (id: string, isDone: boolean) => void
  filterValue: string
}

export const Todolist: React.FC<TodolistType> = ({ title, tasks, removeTask, filterTasks, addTask, changeTaskStatus, filterValue }) => {
  const tasksData = tasks.map(taskElement => {
    const onClickButtonHandler = () => removeTask(taskElement.id)
    const onChangeInputHandler = () => changeTaskStatus(taskElement.id, taskElement.isDone)
    return (
      <li key={taskElement.id} className={taskElement.isDone ? s.completed : ''}>
        <input type='checkbox' checked={taskElement.isDone} onChange={onChangeInputHandler} /> <span>{taskElement.title}</span>{' '}
        <button onClick={onClickButtonHandler}>X</button>
      </li>
    )
  })
  const [error, setError] = useState<string | null>(null)
  const [inputValue, setInputValue] = useState<string>('')
  const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setError(null)
    setInputValue(e.currentTarget.value)
  }
  const onClickAddTaskHandler = () => {
    if (inputValue.trim().length !== 0) {
      addTask(inputValue.trim())
      setInputValue('')
    } else setError('Title is required')
  }
  const onKeyDownAddTaskHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') onClickAddTaskHandler()
  }

  const onAllClickHandler = () => filterTasks('all')
  const onActiveClickHandler = () => filterTasks('active')
  const onCompletedClickHandler = () => filterTasks('completed')
  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input className={error ? s.error : ''} value={inputValue} onChange={onChangeInputHandler} onKeyPress={onKeyDownAddTaskHandler} />
        <button onClick={onClickAddTaskHandler}>+</button>
      </div>
      {error && <span className={error ? s.error_message : ''}>{error}</span>}
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
