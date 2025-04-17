export const itemReducer = (initialState, action) => {
    switch (action.type) {
        case 'Add Item':
            return [...initialState, action.payload]

        case 'Delete Item':
            return initialState.filter(item => item.id !== action.payload)

        case 'Complete Item':
            return initialState.map(item => {
                if(item.id === action.payload){
                    return {
                        ...item,
                        done: !item.done
                    }
                }
                return item
            })

        case 'Update Item':
            return initialState.map(item => {
                if(item.id === action.payload.id){
                    return {
                        ...item,
                        description: action.payload.description
                    }
                }
                return item
            })
    
        default:
            return initialState
    }
}