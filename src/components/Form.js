import React, { useState, useContext } from 'react'
import { StyledInputWrapper, StyledInput, StyledIcon } from './styles/Form'
import { AppContext } from '../AppProvider'

const Form = () => {

  const { todoItems, addNewTodoItem } = useContext(AppContext)
  const [value, setValue] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    setValue('')
    if(value.trim() !== '') {
      addNewTodoItem({
        id: todoItems.length === 0 ? 1 : todoItems.length + 1,
        content: value,
        completed: false
      })
    }
  }

  const onChange = e => setValue(e.target.value)

  return (
    <div className="todos-form">
      <form onSubmit={ onSubmit }>
        <StyledInputWrapper>
          <StyledInput
              type="text" placeholder="What needs to be done?" 
              name="todo"
              onChange={ onChange }
              value={ value }
              autoComplete="off"
          />
          <StyledIcon />
        </StyledInputWrapper>
      </form>
    </div>
  )
}

export default Form