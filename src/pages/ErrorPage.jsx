import React from 'react';
import {useStylesApp} from "../styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";
import {Link} from "react-router-dom";

const ErrorPage = () => {

    const classes = useStylesApp();

    return (
        <Paper className={classes.paper}>
            <Grid container style={{height: '85vh'}} direction={'column'} justifyContent={'center'} alignItems={'center'} spacing={3}>
                <Typography variant={'h3'}>
                    ERROR PAGE IS NOT...
                </Typography>
                <Typography variant={'h5'}>
                    <Link to={'/'}>
                        HOME
                    </Link>
                </Typography>
            </Grid>
        </Paper>
    );
};

export default ErrorPage;