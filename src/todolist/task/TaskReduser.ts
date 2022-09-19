import React from 'react'
import { v1 } from 'uuid'

export type TaskType = {
  id: string
  title: string
  isDone: boolean
}
export type TasksType = {
  [key: string]: Array<TaskType>
}
const initialState: TasksType = {}

type ActionType =
  | RemoveTaskACType
  | AddTaskACType
  | ChangeTaskStatusACType
  | ChangeTaskTitleACType
  | RemoveTodolistTasksACType
  | AddTodolistTasksACType
export const taskReducer = (state: TasksType = initialState, action: ActionType): TasksType => {
  switch (action.type) {
    case 'REMOVE_TASK': {
      state[action.payload.todolistID] = state[action.payload.todolistID].filter(taskElement => taskElement.id !== action.payload.taskID)
      return { ...state }
    }
    case 'ADD_TASK': {
      state[action.payload.todolistID] = [{ id: v1(), title: action.payload.taskTitle, isDone: false }, ...state[action.payload.todolistID]]
      return { ...state }
    }
    case 'CHANGE_TASK_STATUS': {
      state[action.payload.todolistID] = state[action.payload.todolistID].map(taskElement =>
        taskElement.id === action.payload.taskID ? { ...taskElement, isDone: !action.payload.isDone } : taskElement
      )
      return { ...state }
    }
    case 'CHANGE_TASK_TITLE': {
      state[action.payload.todolistID] = state[action.payload.todolistID].map(taskElement =>
        taskElement.id === action.payload.taskID ? { ...taskElement, title: action.payload.taskTitle } : taskElement
      )
      return { ...state }
    }
    case 'REMOVE_TODOLIST_TASKS': {
      delete state[action.payload.todolistID]
      return { ...state }
    }
    case 'ADD_TODOLIST_TASKS': {
      state[action.payload.todolistID] = []
      return { ...state }
    }
    default:
      return state
  }
}
type RemoveTaskACType = ReturnType<typeof removeTaskAC>
export const removeTaskAC = (taskID: string, todolistID: string) => {
  return {
    type: 'REMOVE_TASK',
    payload: {
      taskID: taskID,
      todolistID: todolistID,
    },
  } as const
}
type AddTaskACType = ReturnType<typeof addTaskAC>
export const addTaskAC = (todolistID: string, taskTitle: string) => {
  return {
    type: 'ADD_TASK',
    payload: {
      taskTitle: taskTitle,
      todolistID: todolistID,
    },
  } as const
}
type ChangeTaskStatusACType = ReturnType<typeof changeTaskStatusAC>
export const changeTaskStatusAC = (taskID: string, todolistID: string, isDone: boolean) => {
  return {
    type: 'CHANGE_TASK_STATUS',
    payload: {
      taskID: taskID,
      todolistID: todolistID,
      isDone: isDone,
    },
  } as const
}
type ChangeTaskTitleACType = ReturnType<typeof changeTaskTitleAC>
export const changeTaskTitleAC = (todolistID: string, taskID: string, taskTitle: string) => {
  return {
    type: 'CHANGE_TASK_TITLE',
    payload: {
      taskID: taskID,
      todolistID: todolistID,
      taskTitle: taskTitle,
    },
  } as const
}
type RemoveTodolistTasksACType = ReturnType<typeof removeTodolistTasksAC>
export const removeTodolistTasksAC = (todolistID: string) => {
  return {
    type: 'REMOVE_TODOLIST_TASKS',
    payload: {
      todolistID: todolistID,
    },
  } as const
}
type AddTodolistTasksACType = ReturnType<typeof addTodolistTasksAC>
export const addTodolistTasksAC = (todolistTitle: string, todolistID: string) => {
  return {
    type: 'ADD_TODOLIST_TASKS',
    payload: {
      todolistID: todolistID,
      todolistTitle: todolistTitle,
    },
  } as const
}
