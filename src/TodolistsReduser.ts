import React from 'react'
// import { FilterValuesType } from './App'
type FilterValuesType = 'all' | 'active' | 'completed'
export type TodolistsType = {
  id: string
  title: string
  filter: string
}
const initialState: Array<TodolistsType> = []

type TodolistReducerType = TasksFilterValueACType | RemoveTodolistACType | AddTodolistACType | ChangeTodolistTitleACType
export const todolistsReducer = (state: Array<TodolistsType> = initialState, action: TodolistReducerType): Array<TodolistsType> => {
  switch (action.type) {
    case 'TASKS_FILTER_VALUE': {
      return state.map(todolist =>
        todolist.id === action.payload.todolistID ? { ...todolist, filter: action.payload.filterValue } : todolist
      )
    }
    case 'REMOVE_TODOLIST': {
      return state.filter(todolist => todolist.id !== action.payload.todolistID)
    }
    case 'ADD_TODOLIST': {
      return [{ id: action.payload.todolistID, title: action.payload.todolistTitle, filter: 'all' }, ...state]
    }
    case 'CHANGE_TODOLIST_TITLE': {
      return state.map(todolist =>
        todolist.id === action.payload.todolistID ? { ...todolist, title: action.payload.todolistTitle } : todolist
      )
    }
    default:
      return state
  }
}

type TasksFilterValueACType = ReturnType<typeof tasksFilterValueAC>
export const tasksFilterValueAC = (todolistID: string, filterValue: FilterValuesType) => {
  return {
    type: 'TASKS_FILTER_VALUE',
    payload: {
      todolistID: todolistID,
      filterValue: filterValue,
    },
  } as const
}
type RemoveTodolistACType = ReturnType<typeof removeTodolistAC>
export const removeTodolistAC = (todolistID: string) => {
  return {
    type: 'REMOVE_TODOLIST',
    payload: {
      todolistID: todolistID,
    },
  } as const
}
type AddTodolistACType = ReturnType<typeof addTodolistAC>
export const addTodolistAC = (todolistTitle: string, todolistID: string) => {
  return {
    type: 'ADD_TODOLIST',
    payload: {
      todolistTitle: todolistTitle,
      todolistID: todolistID,
    },
  } as const
}
type ChangeTodolistTitleACType = ReturnType<typeof changeTodolistTitleAC>
export const changeTodolistTitleAC = (todolistID: string, todolistTitle: string) => {
  return {
    type: 'CHANGE_TODOLIST_TITLE',
    payload: {
      todolistTitle: todolistTitle,
      todolistID: todolistID,
    },
  } as const
}
