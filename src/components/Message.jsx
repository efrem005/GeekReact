import React from "react"
import "./message.scss"

const Message = ({message}) => {
    return (
        <div className="block">
            <div className="block_message">Сообщения: <span className="block_message__text">{message}</span></div>
        </div>
    )
}

export default Message