import React, { ChangeEvent, useState, KeyboardEvent } from 'react'
import s from './Todolist.module.scss'

export type AddItemFormType = {
  addItem: (itemTitle: string) => void
}

export const AddItemForm: React.FC<AddItemFormType> = React.memo(({ addItem }) => {
  const [error, setError] = useState<string | null>(null)
  const [inputValue, setInputValue] = useState<string>('')

  const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setError(null)
    setInputValue(e.currentTarget.value)
  }

  const onClickAddTaskHandler = () => {
    if (inputValue.trim().length !== 0) {
      addItem(inputValue.trim())
      setInputValue('')
    } else setError('Title is required')
  }

  const onKeyDownAddTaskHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') onClickAddTaskHandler()
  }

  return (
    <>
      <div>
        <input className={error ? s.error : ''} value={inputValue} onChange={onChangeInputHandler} onKeyPress={onKeyDownAddTaskHandler} />
        <button onClick={onClickAddTaskHandler}>+</button>
      </div>
      {error && <span className={error ? s.error_message : ''}>{error}</span>}
    </>
  )
})
