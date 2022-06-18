import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListChat from './components/ListChat';
import Message from "./components/Message";
import Form from "./components/Form";

import {useStylesApp} from "./styles"

export default function App() {
    const classes = useStylesApp();
    const [open, setOpen] = React.useState(true);
    const [messageList, setMessageList] = useState([])

    useEffect(() => {
        setTimeout(() => {
            botMessage(messageList)
        }, 1500)
    }, [messageList])


    const handClick = (text, author) => {
        if (text !== '' && author !== '') {
            setMessageList([...messageList, {id: Date.now(), text, author}])
        }
    }

    const botMessage = (messageList) => {
        const lastAuthor = messageList[messageList.length - 1]
        if (lastAuthor && lastAuthor.author) {
            setMessageList(prevState => [...prevState, {
                id: Date.now(),
                text: `сообщение отправленно от ${lastAuthor.author}`
            }])
        }
    }

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        Мессенджер
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon/>
                    </IconButton>
                </div>
                <Divider/>
                <List>
                    <ListChat/>
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer}/>
                <Container maxWidth="lg" className={classes.container}>
                    <Paper elevation={5} style={{height: '70vh'}} className={classes.paper}>
                        <Grid container spacing={3}>
                            <Grid md={12} item>
                                {messageList.map((msg => <Message key={msg.id} message={msg}/>))}
                            </Grid>
                        </Grid>
                    </Paper>
                </Container>
                <Container maxWidth="lg">
                    <Paper elevation={5} className={classes.paper}>
                        <Grid md={12} item>
                            <Grid container direction={'row'} justifyContent={'center'} alignContent={'center'}
                                  spacing={3}>
                                <Form handClick={handClick}/>
                            </Grid>
                        </Grid>
                    </Paper>
                </Container>
            </main>
        </div>
    );
}