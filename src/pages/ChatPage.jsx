import React, {useEffect, useState} from 'react';
import Message from "../components/Message";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Form from "../components/Form";
import {useStylesApp} from "../styles";
import {useParams} from "react-router-dom";

const ChatPage = ({messageList, setMessageList}) => {

    const classes = useStylesApp();
    const {id} = useParams()
    const [chat, setChat] = useState([])

    useEffect(() => {
        setChat(messageList.filter(item => item.chat_id === +id))
    }, [id, messageList])


    const handClick = (text, author) => {
        if (text !== '' && author !== '') {
            setMessageList([...messageList, {id: Date.now(), chat_id: +id, text, author}])
        }
    }

    return (
        <>
            <Paper style={{height: '70vh'}} className={classes.paper}>
                <Grid container spacing={3}>
                    <Grid md={12} item>
                        {chat.map((msg => <Message key={msg.id} message={msg} />))}
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