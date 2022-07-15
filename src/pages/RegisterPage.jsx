import React, {useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {useStylesApp} from "../styles";
import {Button, TextField, Typography} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from 'react-router-dom'

import {registerInitial} from "../store/reducer/usersReducer/usersReducer";
import {userSelector} from "../store/reducer/usersReducer/usersSelector";

const RegisterPage = () => {

    const classes = useStylesApp();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(userSelector)

    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [navigate, dispatch, user])

    const handleChange = () => {
        if (password !== confirm) return;
        dispatch(registerInitial(email, password, name))
    }

    return (
        <Paper className={classes.paper}>
            <Grid container style={{height: '85vh'}} direction={'column'} justifyContent={'center'} alignContent={'center'} spacing={3}>
                <Typography variant={'h5'} style={{textAlign: 'center', marginBottom: '20px', fontWeight: '900'}}>
                   REGISTER
                </Typography>
                <form style={{width: '400px', display: "flex", flexDirection: 'column', height: '350px', justifyContent: 'space-between'}}>
                    <TextField
                        label="name"
                        variant="outlined"
                        color="primary"
                        type={"text"}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        label="email"
                        variant="outlined"
                        color="primary"
                        type={"email"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        label="password"
                        variant="outlined"
                        color="primary"
                        type={"password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <TextField
                        label="confirm"
                        variant="outlined"
                        color="primary"
                        type={"password"}
                        value={confirm}
                        onChange={(e) => setConfirm(e.target.value)}
                    />
                    <Button variant={"outlined"} color={"primary"} onClick={() => handleChange()}>Register</Button>
                </form>
            </Grid>
        </Paper>
    );
};

export default RegisterPage;