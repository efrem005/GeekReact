import React, {useState} from 'react';

const Form = ({handClick}) => {

    const [text, setText] = useState('')
    const [author, setAuthor] = useState('')

    const handText = (e) => {
        setText(e.target.value)
    }

    const handAuthor = (e) => {
        setAuthor(e.target.value)
    }

    const handForm = () => {
        handClick(text, author)
    }

    return (
        <div>
            <div>
                <label htmlFor="text">сообщения: </label>
                <input onChange={handText} value={text} id="text" name="text" type="text"/>
            </div>
            <div>
                <label htmlFor="author">автор: </label>
                <input onChange={handAuthor} value={author} id="author" name="author" type="text"/>
            </div>
            <button onClick={handForm}>отправить</button>
        </div>
    );
};

export default Form;