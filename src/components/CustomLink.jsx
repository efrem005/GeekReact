import React from 'react';
import {NavLink, useMatch} from "react-router-dom";

const CustomLink = ({ children, to }) => {
    const match = useMatch(to)
    const classes = (isActive) => {
        if (isActive) {
            return {
                textDecoration: 'none',
                color: '#a9a8a8',
                display: 'flex'
            }
        }
        return {
            textDecoration: 'none',
            display: 'flex'
        }
    }

    return (
        <NavLink to={to} style={classes(match)}>
            {children}
        </NavLink>
    );
};

export default CustomLink;