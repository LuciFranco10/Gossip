import React from 'react';
import * as C from "./styles";
import SidebarHeader from './../SidebarHeader/index';
import SidebarChats from './../SidebarChats/index';

const Sidebar = ({setUserChat, userchat}) => {
    return (
    <C.Container>
        <SidebarHeader setUserChat ={setUserChat} />
        <SidebarChats setUserChat ={setUserChat} userchat ={userchat} />
    </C.Container>
    );
};

export default Sidebar;