import { upload } from '@testing-library/user-event/dist/upload'
import React, { useState } from 'react'

export const AppContext = React.createContext()

const updateTodoItemIds = (items) => {
    return items.map((item, i) => {
        return {
            ...item,
            id: i + 1
        }
    })
}

const AppProvider = ({ children }) => {

    const [todoItems, setTodoItems] = useState(() => {
        const storedItems = localStorage.getItem('todos')
        let items = []
        if(storedItems && Array.isArray(JSON.parse(storedItems))) {
            items = JSON.parse(storedItems)
        }
        return items
    })

    console.log(todoItems)

    const addNewTodoItem = (newTodoItem) => {
        setTodoItems(prevItems => {
            const updatedItems = updateTodoItemIds([...prevItems, newTodoItem])
            localStorage.setItem('todos', JSON.stringify(updatedItems))
            return updatedItems
        })
    }

    const removeTodoItem = (id) => {
        setTodoItems(prevItems => {
            const removedItem = prevItems.find(item => item.id === id)
            const removedItemIndex = prevItems.indexOf(removedItem)
            if(removedItemIndex !== -1) {
                const items = [...prevItems]
                items.splice(removedItemIndex, 1)
                const updatedItems = updateTodoItemIds(items)
                localStorage.setItem('todos', JSON.stringify(updatedItems))
                return updatedItems
            } else {
                return prevItems
            }
        })
    }

    const toggleCompletedTodoItem = (completed, id) => {
        setTodoItems(prevItems => {
            const item = prevItems.find(item => item.id === id)
            const itemIndex = prevItems.indexOf(item)
            if(itemIndex !== -1) {
                const items = [...prevItems]
                items[itemIndex].completed = completed
                localStorage.setItem('todos', JSON.stringify(items))
                return items
            } else {
                return prevItems
            }
        })
    }

    const editTodoItem = (content, id) => {
        setTodoItems(prevItems => {
            const item = prevItems.find(item => item.id === id)
            const itemIndex = prevItems.indexOf(item)
            if(itemIndex !== -1) {
                const items = [...prevItems]
                items[itemIndex].content = content
                localStorage.setItem('todos', JSON.stringify(items))
                return items
            } else {
                return prevItems
            }
        })
    }

    const removeAllCompletedTodoItems = () => {
        setTodoItems(prevItems => {
            const items = [...prevItems].filter(item => !item.completed)
            localStorage.setItem('todos', JSON.stringify(items))
            return items
        })
    }

    return (
        <AppContext.Provider
            value={{
                todoItems,
                addNewTodoItem,
                removeTodoItem,
                toggleCompletedTodoItem,
                editTodoItem,
                removeAllCompletedTodoItems
            }}
        >
            { children }
        </AppContext.Provider>
    )
}

export default AppProvider