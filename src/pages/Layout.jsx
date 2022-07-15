import React from 'react';
import { Outlet } from 'react-router-dom'
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Divider from "@material-ui/core/Divider";
import ListChat from "../components/ChatLink";
import Container from "@material-ui/core/Container";
import {useStylesApp} from "../styles";
import PageLink from "../components/PageLink";
import {Button, FormControlLabel, Switch} from "@material-ui/core";
import { useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {userSelector} from "../store/reducer/usersReducer/usersSelector";
import {logoutInitial} from "../store/reducer/usersReducer/usersReducer";

const Layout = ({dark, toggleChecked}) => {

    const classes = useStylesApp();
    const [open, setOpen] = React.useState(true);
    const navigate = useNavigate()
    const user = useSelector(userSelector)
    const dispatch = useDispatch()

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const handleLogout = () => {
        dispatch(logoutInitial())
    }

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="absolute" color={"inherit"} className={clsx(classes.appBar, open && classes.appBarShift)}>
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
                    <FormControlLabel
                        value="mode"
                        control={<Switch size={"small"} color="primary" onChange={toggleChecked} />}
                        label={dark ? "dark" : "light"}
                        labelPlacement="end"
                    />
                    {user === null
                        ?
                            <>
                                <Button variant="contained" style={{marginRight: '10px'}} onClick={() => navigate('/register')}>REGISTER</Button>
                                <Button variant="contained" onClick={() => navigate('/login')} color={"primary"}>SIGN UP</Button>
                            </>
                        :
                            <>
                                <Button variant="contained" onClick={() => handleLogout()} color={"primary"}>LOGOUT</Button>
                            </>
                    }

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
                <ListChat/>
                <Divider/>
                <PageLink/>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer}/>
                <Container maxWidth="lg" className={classes.container}>
                    <Outlet />
                </Container>
            </main>
        </div>
    );
};

export default Layout;