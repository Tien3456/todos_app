import React, { useContext } from 'react'
import { StyledNav } from './styles/Nav'
import { AppContext } from '../AppProvider'
import { Link, useLocation } from 'react-router-dom'

const SuiLink = ({ to, link }) => {

  const pathname = useLocation().pathname

  return (
    <Link 
      to={ to }
      style={{
        border: to === pathname ? "1px solid rgba(175, 47, 47, 0.2)" : "none"
      }}
    >
      { link }
    </Link>
  )
}

const Nav = () => {

  const { todoItems, removeAllCompletedTodoItems } = useContext(AppContext)

  const leftItemsQty = todoItems.filter(item => !item.completed).length
  const completedItemsQty = todoItems.filter(item => item.completed).length

  return (
    <StyledNav>
      <span>
        {
          leftItemsQty === 1
            ? `${leftItemsQty} item left`
            : `${leftItemsQty} items left`
        }
      </span>
      <div className="links-wrapper">
        <SuiLink to="/" link="All" />
        <SuiLink to="/active" link="Active" />
        <SuiLink to="/completed" link="Completed" />
      </div>
      <button 
        className="clear-completed"
        onClick={ removeAllCompletedTodoItems }
        style={{
          visibility: completedItemsQty > 0 ? "visible" : "hidden"
        }}
      >
        Clear completed
      </button>
    </StyledNav>
  )
}

export default Nav