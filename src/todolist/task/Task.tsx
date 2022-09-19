import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { EditableSpan } from '../../editableTitle/EditableTitle'
import { removeTaskAC, changeTaskStatusAC, changeTaskTitleAC } from './TaskReduser'
import s from '../Todolist.module.scss'

type TaskType = {
  taskID: string
  taskTitle: string
  isChecked: boolean
  todolistID: string
}

export const Task: React.FC<TaskType> = React.memo(({ taskID, taskTitle, isChecked, todolistID }) => {
  console.log('render TASK')
  const dispatch = useDispatch()
  const onClickButtonHandler = () => dispatch(removeTaskAC(taskID, todolistID))
  const onChangeInputHandler = () => dispatch(changeTaskStatusAC(taskID, todolistID, isChecked))
  const onChangeTaskTitle = useCallback((taskTitle: string) => dispatch(changeTaskTitleAC(todolistID, taskID, taskTitle)), [])

  return (
    <>
      <li className={isChecked ? s.completed : ''}>
        <input type='checkbox' checked={isChecked} onChange={onChangeInputHandler} />
        <EditableSpan itemTitle={taskTitle} onChange={onChangeTaskTitle} />
        <button onClick={onClickButtonHandler}>X</button>
      </li>
    </>
  )
})
