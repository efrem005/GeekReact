import React, {useState} from 'react';
import ListSubheader from '@material-ui/core/ListSubheader';
import {Button, List, Modal, TextField} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import {useStylesModal} from "../styles";
import Typography from "@material-ui/core/Typography";
import CustomLink from "./CustomLink";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import PeopleIcon from "@material-ui/icons/People";
import ListItemText from "@material-ui/core/ListItemText";

const ChatLink = () => {

    const classes = useStylesModal();
    const [name, setName] = useState('')
    const [open, setOpen] = React.useState(false);
    const [listItems, setListItems] = useState([
        {id: 1, name: 'chat 1'},
        {id: 2, name: 'chat 2'},
        {id: 3, name: 'chat 3'},
        {id: 4, name: 'chat 4'},
        {id: 5, name: 'chat 5'},
        {id: 6, name: 'chat 6'},
        {id: 7, name: 'chat 7'},
    ])

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const changeText = (e) => {
        setName(e.target.value)
    }

    const handleAddChat = () => {
        if (name !== '') {
            setListItems([
                ...listItems, {id: Date.now(), name: name}
            ])
            setOpen(false)
        }
    };

    return (
        <>
        <List>
            <ListSubheader style={{fontWeight: 'bold'}} inset>Чаты</ListSubheader>
            {listItems.map(item => (
                <CustomLink key={item.id} to={`/chat/${item.id}`}>
                    <ListItem button>
                        <ListItemIcon>
                            <PeopleIcon />
                        </ListItemIcon>
                        <ListItemText secondary={item.name}/>
                    </ListItem>
                </CustomLink>
            ))}
            <ListItem style={{justifyContent: 'center'}} onClick={handleOpen} button>
                +
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