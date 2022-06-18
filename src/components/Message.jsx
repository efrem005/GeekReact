import React from "react"
import {Card, CardContent, Typography} from "@material-ui/core";
import {useStylesMessage} from "../styles";
import PropTypes from 'prop-types'

const Message = ({message}) => {

    const classes = useStylesMessage();

    return (
        <Card className={classes.msg}>
            <CardContent>
                <Typography variant="h4" color="textSecondary">
                    {message.author}
                </Typography>
                <Typography variant="h5" component="h2">
                    {message.text}
                </Typography>
            </CardContent>
        </Card>
    )
}

Message.prototype = {
    message: {
        text: PropTypes.string,
        author: PropTypes.string
    }
}

export default Message