import messageReducer from "../../store/reducer/messageReducer/messageReducer";
import { ADD_MESSAGE } from '../../store/reducer/messageReducer/actionType'


const state = [
    { id: 1, chat_id: 1, text: 'hello', author: 'niko' },
    { id: 2, chat_id: 1, text: 'hello', author: 'anastasia' }
]

describe('messageReducer', () => {
    test('create message', function () {
        const action = { type: ADD_MESSAGE, payload: {id: 2, chat_id: 1, text: "hello", author: "anastasia"} }
        const result = messageReducer([{id: 1, chat_id: 1, text: "hello", author: "niko"}], action)

        expect(result).toEqual(state)
        expect(result[0].id).toBe(1)
    });
})