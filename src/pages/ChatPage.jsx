import React from 'react';
import Message from "../components/Message";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Form from "../components/Form";
import {useStylesApp} from "../styles";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getMessage} from "../store/reducer/messageReducer/messageSelector";

const ChatPage = () => {

    const classes = useStylesApp();

    const {id} = useParams()
    const message = useSelector(getMessage)
    const dispatch = useDispatch()


    const handClick = (text, author) => {
        if (text !== '' && author !== '') {
            dispatch({type: "ADD_MESSAGE", payload: {id: Date.now(), chat_id: +id, text, author}})
        }
    }

    return (
        <>
            <Paper style={{height: '70vh'}} className={classes.paper}>
                <Grid container spacing={3}>
                    <Grid md={12} item>
                        {message.filter((msg => msg.chat_id === +id)).map((msg => <Message key={msg.id} message={msg} />))}
                    </Grid>
                </Grid>
            </Paper>
            <Paper style={{marginTop: '20px'}} elevation={2} className={classes.paper}>
                <Grid md={12} item>
                    <Grid container direction={'row'} justifyContent={'center'} alignContent={'center'}
                          spacing={2}>
                        <Form handClick={handClick}/>
                    </Grid>
                </Grid>
            </Paper>
        </>
    );
};

export default ChatPage;