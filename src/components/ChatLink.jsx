import React, {useEffect, useState} from 'react';
import ListSubheader from '@material-ui/core/ListSubheader';
import {Button, List, Modal, TextField} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import {useStylesModal} from "../styles";
import Typography from "@material-ui/core/Typography";
import CustomLink from "./CustomLink";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {People, Delete, Add} from "@material-ui/icons";
import ListItemText from "@material-ui/core/ListItemText";
import {getChatList} from '../store/reducer/chatReducer/chatSelector'
import {deleteChatList} from '../store/reducer/chatReducer/actionCreated'
import {getChatInitial, setChatList} from '../store/reducer/chatReducer/chatReducer'
import {useDispatch, useSelector} from "react-redux";

const ChatLink = () => {

    const classes = useStylesModal();
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('')

    const chatItems = useSelector(getChatList)
    const dispatch = useDispatch()

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCreateChat = () => {
        if (name === '') return

        dispatch(setChatList(name))
        setOpen(false)
        setName('')
    };

    const deleteChat = (id) => {
        dispatch(deleteChatList(id))
    }


    useEffect(() => {
        dispatch(getChatInitial())
    },[dispatch])

    return (
        <>
            <List>
                <ListSubheader style={{fontWeight: 'bold'}} inset>Чаты</ListSubheader>
                {chatItems.length
                    ?
                    chatItems.map(item => (
                        <CustomLink key={item.id} to={`/chat/${item.id}`}>
                            <ListItem button>
                                <ListItemIcon>
                                    <People/>
                                </ListItemIcon>
                                <ListItemText secondary={item.name}/>
                                <ListItemIcon onClick={() => deleteChat(item.id)}>
                                    <Delete/>
                                </ListItemIcon>
                            </ListItem>
                        </CustomLink>
                    )) :
                    <ListItem>
                        <ListItemText style={{paddingLeft: "10px"}} secondary={"нет чатов!"}/>
                    </ListItem>}
                <ListItem style={{justifyContent: 'center'}} onClick={handleOpen} button>
                    <Add />
                </ListItem>
            </List>
            <Modal
                open={open}
                onClose={handleClose}
                className={classes.modal}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div className={classes.paper}>
                    <Typography variant="h5" color="inherit" noWrap style={{marginBottom: '10px', textAlign: 'center'}}>
                        Add chat
                    </Typography>
                    <TextField
                        fullWidth
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        variant="outlined"
                        id="standard-basic"
                        label="name"
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        size="small"
                        onClick={handleCreateChat}
                    >
                        создать
                    </Button>
                </div>
            </Modal>
        </>
    );
}

export default ChatLink;