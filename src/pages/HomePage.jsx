import React from 'react';
import {useStylesApp} from "../styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {Button, ButtonGroup, Typography} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {getCounter} from "../store/reducer/counterReducer/counterSelector";



const HomePage = () => {
    const classes = useStylesApp();
    const dispatch = useDispatch();
    const count = useSelector(getCounter)

    return (
        <Paper className={classes.paper}>
            <Grid container style={{height: '85vh'}} direction={'column'} justifyContent={'center'} alignItems={'center'} spacing={3}>
                <Typography variant={'h5'}>
                    WELCOME TO MESSAGES...
                </Typography>
                <Typography style={count > 5 ? {color: 'darkorchid'} : {color: 'darkgreen'}} variant={'h3'}>
                    {count}
                </Typography>
                <ButtonGroup variant={count > 8 ? 'outlined' : 'contained'} color={count > 5 ? 'secondary' : 'primary'} aria-label="contained primary button group">
                    <Button onClick={() => dispatch({type: 'INCREMENT'})}>+</Button>
                    <Button onClick={() => dispatch({type: 'RESET'})}>RESET</Button>
                    <Button onClick={() => dispatch({type: 'DECREMENT'})}>-</Button>
                </ButtonGroup>
            </Grid>
        </Paper>
    );
};

export default HomePage;