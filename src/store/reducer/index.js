const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "increment": {
            return {
                ...state,
                counter: state.counter + 1
            }
        }
        case "decrement": {
            if (state.counter < 1) return {...state}
            return {
                ...state,
                counter: state.counter - 1
            }
        }
        case "reset": {
            return {
                ...state,
                counter: 0
            }
        }
        default:
            return state
    }
}

export default reducer