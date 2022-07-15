import React, {useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {useStylesApp} from "../styles";
import {Button, TextField, Typography} from "@material-ui/core";
import { useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {userSelector} from "../store/reducer/usersReducer/usersSelector";
import {loginInitial} from "../store/reducer/usersReducer/usersReducer";

const LoginPage = () => {

    const classes = useStylesApp();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const user = useSelector(userSelector)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        if (!user) return;
        navigate('/')
    }, [navigate, user])

    const handleChange = () => {
       if (!email || !password) return;
        dispatch(loginInitial(email, password))
    }


    return (
        <Paper className={classes.paper}>
            <Grid container style={{height: '85vh'}} direction={'column'} justifyContent={'center'} alignContent={'center'} spacing={3}>
                <Typography variant={'h5'} style={{textAlign: 'center', marginBottom: '20px', fontWeight: '900'}}>
                    SIGN UP
                </Typography>
                <form style={{width: '400px', display: "flex", flexDirection: 'column', height: '200px', justifyContent: 'space-between'}}>
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
                    <Button variant={"outlined"} color={"primary"} onClick={() => handleChange()}>SIGN UP</Button>
                </form>
            </Grid>
        </Paper>
    );
};

export default LoginPage;