export const botMessage = state => next => action => {
    if (action.type !== "ADD_MESSAGE") return next(action)

    setTimeout(() => {
        state.dispatch({type: "BOT_MESSAGE", payload: {
                id: Date.now(),
                chat_id: action.payload.chat_id,
                text: `сообщение отправленно от ${action.payload.author}`
            }})
        }, 1500)

    return next(action)
}