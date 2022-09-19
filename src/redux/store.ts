import { combineReducers, legacy_createStore } from 'redux'
import { taskReducer } from '../todolist/task/TaskReduser'
import { todolistReducer } from '../todolist/TodolistReduser'

const rootReducer = combineReducers({
  todolists: todolistReducer,
  tasks: taskReducer,
})

// Автоматическая типизация state в store (всего приложения)
export type AppRootStateType = ReturnType<typeof rootReducer>
export const store = legacy_createStore(rootReducer)

//@ts-ignore
window.store = store
