import React, {useCallback, useRef, useState} from 'react';
import {TextField, Button, FormControl} from "@material-ui/core";
import {Send} from '@material-ui/icons';
import Grid from "@material-ui/core/Grid";

import { useStylesForm } from "../styles"

const Form = ({handClick}) => {

    const classes = useStylesForm()
    const [text, setText] = useState('')
    const [author, setAuthor] = useState('')
    const input = useRef(null)

    const handText = useCallback((e) => {
        setText(e.target.value)
    }, [])

    const handAuthor = useCallback((e) => {
        setAuthor(e.target.value)
    }, [])

    const handForm = (e) => {
        e.preventDefault()
        handClick(text, author)
        setText('')
        input.current.focus()
    }

    const handleChangeForm = useCallback((e) => {
        if(e.key === 'Enter') handClick(text, author)
    }, [text, author, handClick])

    return (
        <>
            <Grid md={3} item>
                <FormControl fullWidth>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        autoFocus
                        id="outlined-basic"
                        label="автор"
                        name="author"
                        value={author}
                        onChange={handAuthor}
                        onKeyDown={handleChangeForm}
                        placeholder="Автор сообщения..."
                    />
                </FormControl>
            </Grid>

            <Grid md={7} item>
                <FormControl fullWidth>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="text"
                        label="сообщения"
                        name="text"
                        value={text}
                        inputRef={input}
                        onChange={handText}
                        onKeyDown={handleChangeForm}
                        placeholder="Текст сообщения..."
                    />
                </FormControl>
            </Grid>
            <Grid md={2} item>
                <FormControl fullWidth>
                    <Button
                        onClick={handForm}
                        endIcon={<Send />}
                        type="submit"
                        fullWidth
                        variant="text"
                        color="primary"
                        className={classes.submit}
                    >
                        отправить
                    </Button>
                </FormControl>
            </Grid>
        </>
    );
};

export default Form;