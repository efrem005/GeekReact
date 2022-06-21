import React, {useState} from 'react';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItem from "@material-ui/core/ListItem";
import {Home, AssignmentInd, Info} from "@material-ui/icons";
import {List} from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import CustomLink from "./CustomLink";

const PageLink = () => {

    const [pages] = useState([
        {name: 'HOME', link: '/', icon: <Home />},
        {name: 'PROFILE', link: '/profile', icon: <AssignmentInd />},
        {name: 'ABOUT', link: '/about', icon: <Info />},
    ])

    return (
        <List>
            <ListSubheader style={{fontWeight: 'bold'}} inset>Страницы</ListSubheader>
            {pages.map(page => (
                <CustomLink key={page.name} to={page.link}>
                    <ListItem button>
                        <ListItemIcon>
                            {page.icon}
                        </ListItemIcon>
                        <ListItemText secondary={page.name} />
                    </ListItem>
                </CustomLink>))}
        </List>
    );
}

export default PageLink;