import React from 'react';
import {useStylesApp} from "../styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";

const ProfilePage = () => {
    const classes = useStylesApp();

    return (
        <Paper className={classes.paper}>
            <Grid container style={{height: '85vh'}} direction={'row'} justifyContent={'center'} alignContent={'center'} spacing={3}>
                <Typography variant={'h5'}>
                    PROFILE PAGE...
                </Typography>
            </Grid>
        </Paper>
    );
};

export default ProfilePage;