import React, { useContext } from 'react'
import { AppContext } from '../AppProvider'
import TodoItem from '../components/TodoItem'

const AllTodoItems = () => {

    const { todoItems } = useContext(AppContext)

    return (
        <>
            {
                todoItems.map((item, i) => (
                    <TodoItem
                        key={ i }
                        id={ item.id }
                        label={ item.content }
                        completed={ item.completed }
                    />
                ))
            }
        </>
    )
}

export default AllTodoItems