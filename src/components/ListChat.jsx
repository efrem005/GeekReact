import React, {useState} from 'react';
import ListSubheader from '@material-ui/core/ListSubheader';

import ListChatItem from './ListChatItem'
import {List} from "@material-ui/core";

const ChatList = () => {

    const [listItems] = useState([
        {id: 1, name: 'chat 1'},
        {id: 2, name: 'chat 2'},
        {id: 3, name: 'chat 3'},
        {id: 4, name: 'chat 4'},
        {id: 5, name: 'chat 5'},
        {id: 6, name: 'chat 6'},
        {id: 7, name: 'chat 7'},
    ])


    return (
        <List>
            <ListSubheader inset>Чаты</ListSubheader>
            {listItems.map(item => <ListChatItem key={item.id} name={item.name} />)}
        </List>
    );
}

export default ChatList;