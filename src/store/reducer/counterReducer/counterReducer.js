import { INCREMENT, RESET, DECREMENT } from './actionType'

const initialState = {
    counter: 0
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT: {
            return {
                ...state,
                counter: state.counter + 1
            }
        }
        case RESET: {
            return {
                ...state,
                counter: 0
            }
        }
        case DECREMENT: {
            if (state.counter < 1) return {...state}
            return {
                ...state,
                counter: state.counter - 1
            }
        }
        default:
            return state
    }
}

export default counterReducer