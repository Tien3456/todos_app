import React, { useContext } from 'react'
import { AppContext } from '../AppProvider'
import TodoItem from '../components/TodoItem'

const CompletedItems = () => {

    const { todoItems } = useContext(AppContext)

    const completedItems = todoItems.filter(item => item.completed)

    return (
        <>
            {
                completedItems.map((item, i) => (
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

export default CompletedItems