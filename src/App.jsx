import React, {useEffect, useState} from "react";
import './App.scss'
import Message from "./components/Message"
import Form from "./components/Form";

function App() {
    // id,text,author
    const [id, setId] = useState(1)
    const [messageList, setMessageList] = useState([])
    const [msgCount, setMsgCount] = useState(0)


    function handClick (text, author) {
        setMessageList([...messageList, {id, text, author}])
        setId(id => id + 1)
        setMsgCount(count => count + 1)
    }

    useEffect(() => {
        setTimeout(() => {
            setMessageList([...messageList, {id, text: "hello fix message Robot", author: "Robot"}])
            setId(id => id + 1)
        }, 1500)
    },[msgCount])

    return (
        <div className="App">
            <div>
                {messageList.map((msg => <Message key={msg.id} message={msg} />))}
            </div>
            <div className="App_input">
                <Form handClick={handClick}/>
            </div>
        </div>
      );
}

export default App;
