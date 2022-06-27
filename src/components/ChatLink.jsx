import React from 'react';
import ListSubheader from '@material-ui/core/ListSubheader';
import {Button, List, Modal, TextField} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import {useStylesModal} from "../styles";
import Typography from "@material-ui/core/Typography";
import CustomLink from "./CustomLink";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {People, Delete, Add} from "@material-ui/icons";
import ListItemText from "@material-ui/core/ListItemText";
import {getChat} from '../store/reducer/chatReducer/chatSelector'
import {useDispatch, useSelector} from "react-redux";

const ChatLink = () => {

    const classes = useStylesModal();
    const [open, setOpen] = React.useState(false);

    const {chatItems, name} = useSelector(getChat)
    const dispatch = useDispatch()

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const changeText = (e) => {
        dispatch({type: "SET_NAME", payload: e.target.value})
    }

    const handleAddChat = () => {
        if (name !== '') {
            dispatch({type: "ADD_CHAT_LIST"})
            setOpen(false)
        }
    };

    const deleteItem = (id) => {
        dispatch({type: "DELETE_ITEM", payload: id})
    }

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
                                <ListItemIcon onClick={() => deleteItem(item.id)}>
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
                        onChange={changeText}
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
                        onClick={handleAddChat}
                    >
                        создать
                    </Button>
                </div>
            </Modal>
        </>
    );
}

export default ChatLink;