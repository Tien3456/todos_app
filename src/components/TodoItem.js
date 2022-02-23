import React, { useState, useContext } from 'react'
import { StyledItem } from './styles/TodoItem'
import { AppContext } from '../AppProvider'

const TodoItem = ({ id, inputName, label, completed }) => {

  const { 
    toggleCompletedTodoItem, 
    removeTodoItem,
    editTodoItem
  } = useContext(AppContext)
  const [hovered, setHover] = useState(false)
  const [isEditting, setEdit] = useState(false)
  const [value, setValue] = useState(label)

  const onBlurForm = () => {
    setEdit(false)
    setValue(label)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setEdit(false)
    editTodoItem(value, id)
  }

  return (
    <StyledItem 
      completed={ completed }
      hovered={ hovered }
      isEditting={ isEditting }
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <div className="checkbox-wrapper">
        <input type="checkbox" />
        <span 
          className="checkbox-completed"
          onClick={() => toggleCompletedTodoItem(!completed, id)}
        >
        </span>
      </div>
      <div className="label-wrapper">
        <form
          onDoubleClick={() => setEdit(true)}
          onBlur={ onBlurForm }
          onSubmit={ onSubmit }
        >
          {
            isEditting
              ? <input 
                type="text" value={ value }
                onChange={(e) => setValue(e.target.value)}
              />
              : <label>{ label }</label>
          }
        </form>
        <div className="button-wrapper">
          <button
            className="remove-btn"
            onClick={() => removeTodoItem(id)}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
    </StyledItem>
  )
}

export default TodoItem