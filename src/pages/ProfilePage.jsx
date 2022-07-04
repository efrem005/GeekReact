import React, {useEffect} from 'react';
import {useStylesApp} from "../styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {Avatar, Button, Typography} from "@material-ui/core";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {apiUserOne} from "../store/reducer/usersReducer/usersReducer";
import {getLoader, getUser, getError} from "../store/reducer/usersReducer/usersSelector";

const ProfilePage = () => {
    const classes = useStylesApp();
    const { id } = useParams()
    const user = useSelector(getUser)
    const error = useSelector(getError)
    const loader = useSelector(getLoader)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(apiUserOne(id))
    }, [id, dispatch])

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
                        <Button variant="contained" onClick={() => dispatch(apiUserOne(id))}>обновить</Button>
                    </Typography>
                </Grid>
            </Paper>
        )
    }

    return (
        <Paper className={classes.paper}>
            <Grid container style={{height: '85vh', padding: '10px'}} direction={'column'} justifyContent={'center'} alignItems={'center'} spacing={3}>
                <Typography variant={'h5'} style={{marginBottom: '20px'}}>
                    {user.name}
                </Typography>
                <Typography variant={'h5'}>
                    <Avatar style={{width: "100px", height: '100px'}} alt="Remy Sharp"  src={user.avatar_url} />
                </Typography>
            </Grid>
        </Paper>
    );
};

export default ProfilePage;