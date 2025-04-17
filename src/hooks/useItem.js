import { useEffect, useReducer } from "react"
import { itemReducer } from "../itemreducer"

export const useItem = () => {
    const initialState = []

    const init = () => {
        return JSON.parse(localStorage.getItem('items')) || []
    }

    const [items, dispatch] = useReducer(
        itemReducer, 
        initialState, 
        init
    )

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items))

    }, [items])

    const getSortedItems = (items) => {
        return [...items].sort((a, b) => a.done - b.done);
    }

    const sortedItems = getSortedItems(items);
    
    const itemCount = items.length

    const handleNewItem = item => {
        const action = {
            type: "Add Item",
            payload: item
        }

        dispatch(action)
    }

    const handleDeleteItem = id => {
        const action = {
            type: "Delete Item",
            payload: id
        }

        dispatch(action)
    }

    const handleCompleteItem = id => {
        const action = {
            type: "Complete Item",
            payload: id
        }

        dispatch(action)
    }

    const handleUpdateItem = (id, description) => {
        const action = {
            type: "Update Item",
            payload: {
                id,
                description
            }
        }

        dispatch(action)
    }

    return{
        items: sortedItems,
        itemCount,
        handleNewItem,
        handleDeleteItem,
        handleCompleteItem,
        handleUpdateItem
    }
}