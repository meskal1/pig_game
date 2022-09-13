import React from 'react'
import { FilterValuesType } from './App'

type TasksType = {
  id: number
  title: string
  isDone: boolean
}
type TodolistType = {
  title: string
  tasks: Array<TasksType>
  removeTask: (id: number) => void
  filterTasks: (filterValue: FilterValuesType) => void
}

export const Todolist = (props: TodolistType) => {
  const tasks = props.tasks.map(el => {
    return (
      <li key={el.id}>
        <input type='checkbox' checked={el.isDone} onChange={() => {}} /> <span>{el.title}</span>{' '}
        <button onClick={() => props.removeTask(el.id)}>X</button>
      </li>
    )
  })

  const filterTasks = (filterValue: FilterValuesType) => {
    props.filterTasks(filterValue)
  }

  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      <ul>{tasks}</ul>
      <div>
        <button onClick={() => filterTasks('all')}>All</button>
        <button onClick={() => filterTasks('active')}>Active</button>
        <button onClick={() => filterTasks('completed')}>Completed</button>
      </div>
    </div>
  )
}
