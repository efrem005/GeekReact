import React from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {useStylesApp} from "../styles";
import {Typography} from "@material-ui/core";

const AboutPage = () => {

    const classes = useStylesApp();

    return (
        <Paper className={classes.paper}>
            <Grid container style={{height: '85vh'}} direction={'row'} justifyContent={'center'} alignContent={'center'} spacing={3}>
                <Typography variant={'h5'}>
                    ABOUT PAGE...
                </Typography>
            </Grid>
        </Paper>
    );
};

export default AboutPage;