import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { AddItemForm } from '../addItemForm/AddItemForm'
import { EditableSpan } from '../editableTitle/EditableTitle'
import { Task } from './task/Task'
import { addTaskAC, removeTodolistTasksAC, TaskType } from './task/TaskReduser'
import s from './Todolist.module.scss'
import { changeTodolistTitleAC, removeTodolistAC, tasksFilterValueAC } from './TodolistReduser'

type TodolistType = {
  todolistID: string
  title: string
  filterValue: string
  tasks: Array<TaskType>
}

export const Todolist: React.FC<TodolistType> = React.memo(({ todolistID, title, filterValue, tasks }) => {
  console.log(`render TODOLIST ${todolistID}`)
  const dispatch = useDispatch()

  let filteredTasks = tasks
  if (filterValue === 'active') filteredTasks = filteredTasks.filter(taskElement => taskElement.isDone === false)
  if (filterValue === 'completed') filteredTasks = filteredTasks.filter(taskElement => taskElement.isDone === true)
  const tasksData = filteredTasks.map(taskElement => {
    return (
      <Task
        key={taskElement.id}
        taskID={taskElement.id}
        taskTitle={taskElement.title}
        isChecked={taskElement.isDone}
        todolistID={todolistID}
      />
    )
  })
  const onChangeTodolistTitle = useCallback((todolistTitle: string) => dispatch(changeTodolistTitleAC(todolistID, todolistTitle)), [])
  const onClickAddTaskHandler = useCallback((taskTitle: string) => dispatch(addTaskAC(todolistID, taskTitle)), [todolistID])
  const onAllClickHandler = () => dispatch(tasksFilterValueAC(todolistID, 'all'))
  const onActiveClickHandler = () => dispatch(tasksFilterValueAC(todolistID, 'active'))
  const onCompletedClickHandler = () => dispatch(tasksFilterValueAC(todolistID, 'completed'))
  const onClickRemoveHandler = () => {
    dispatch(removeTodolistAC(todolistID))
    dispatch(removeTodolistTasksAC(todolistID))
  }

  return (
    <>
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
    </>
  )
})
