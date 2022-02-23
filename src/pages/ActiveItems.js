import React, { useContext } from 'react'
import { AppContext } from '../AppProvider'
import TodoItem from '../components/TodoItem'

const ActiveItems = () => {

    const { todoItems } = useContext(AppContext)

    const activeItems = todoItems.filter(item => !item.completed)

    return (
        <>
            {
                activeItems.map((item, i) => (
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

export default ActiveItems