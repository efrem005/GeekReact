import counterReducer from "../../store/reducer/counterReducer/counterReducer";
import {INCREMENT, DECREMENT, RESET} from '../../store/reducer/counterReducer/actionType'

describe('counterReducer', () => {
    test('should return default state', function () {
        const result = counterReducer({counter: 0}, { type: '' })

        expect(result.counter).toEqual(0)
    });

    test('increment 1', () => {
        const action = { type: INCREMENT }

        const result = counterReducer({counter: 0}, action)

        expect(result.counter).toBe(1)
    })

    test('increment 2', () => {
        const action = { type: INCREMENT }

        const result = counterReducer({counter: 1}, action)

        expect(result.counter).toBe(2)
    })

    test('decrement', () => {
        const action = { type: DECREMENT }

        const result = counterReducer({counter: 2}, action)

        expect(result.counter).toBe(1)
    })

    test('RESET', () => {
        const action = { type: RESET }

        const result = counterReducer({counter: 1}, action)

        expect(result.counter).toBe(0)
    })
})