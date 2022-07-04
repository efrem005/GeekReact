import React, {useEffect} from 'react';
import {useStylesApp} from "../styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {Avatar, Button, Typography} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {apiUsers} from "../store/reducer/usersReducer/usersReducer";
import {getLoader, getUsers, getError} from "../store/reducer/usersReducer/usersSelector";
import CustomLink from "../components/CustomLink";

const UsersPage = () => {
    const classes = useStylesApp()
    const dispatch = useDispatch()
    const users = useSelector(getUsers)
    const error = useSelector(getError)
    const loader = useSelector(getLoader)

    useEffect(() => {
        dispatch(apiUsers())
    }, [dispatch])

    if (loader) {
        return (
            <Paper className={classes.paper}>
                <Grid container style={{height: '85vh', padding: '10px'}} spacing={3}>
                    <Typography variant={'h5'}>
                        Загрузка...
                    </Typography>
                </Grid>
            </Paper>
        )
    }

    if (error) {
        return (
            <Paper className={classes.paper}>
                <Grid container style={{height: '85vh', padding: '10px'}} direction={'column'} justifyContent={'center'} alignItems={'center'} spacing={3}>
                    <Typography variant={'h5'} style={{marginBottom: '20px'}}>
                        Ошибка...
                    </Typography>
                    <Typography variant={'h5'}>
                        {error}
                    </Typography>
                    <Typography variant={'button'} style={{marginTop: '20px'}}>
                        <Button variant="contained" onClick={() => dispatch(apiUsers())}>обновить</Button>
                    </Typography>
                </Grid>
            </Paper>
        )
    }

    return (
        <Paper className={classes.paper}>
            <Grid container style={{height: '85vh', padding: '10px'}} spacing={3}>
                <Typography variant={'h5'}>
                    PROFILE PAGE...
                </Typography>
                <Grid container item spacing={3} sx={12}>
                    {users.map((user) => (
                        <Grid key={user.id} container item wrap="nowrap" justifyContent={'flex-start'} alignItems={'center'} spacing={2}>
                            <CustomLink to={`/profile/${user.id}`}>
                                <Grid item>
                                    <Avatar src={user.avatar_url}></Avatar>
                                </Grid>
                                <Grid item>
                                <Typography style={{color: 'black', paddingLeft: '5px'}} variant={'h5'}>{user.login}</Typography>
                                </Grid>
                            </CustomLink>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Paper>
    );
};

export default UsersPage;