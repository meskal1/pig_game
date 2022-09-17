import { combineReducers, legacy_createStore } from 'redux'
import { tasksReducer } from '../TasksReduser'
import { todolistsReducer } from '../TodolistsReduser'

const rootReducer = combineReducers({
  todolists: todolistsReducer,
  tasks: tasksReducer,
})

// let preloadedState;
// const pesistedCounter = localStorage.getItem('maxNumber2')
// if (pesistedCounter) preloadedState = {
// 	maxNumber: JSON.parse(pesistedCounter),
// 	startNumber: Number(localStorage.getItem('startNumber2')),
// 	counter: Number(localStorage.getItem('startNumber2')),
// }
// export const store = legacy_createStore(rootReducer, preloadedState);

// Автоматическая типизация state в store (всего приложения)
export type AppRootStateType = ReturnType<typeof rootReducer>
export const store = legacy_createStore(rootReducer)

//@ts-ignore
window.store = store
