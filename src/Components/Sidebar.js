import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow'
import Avatar from "@material-ui/core/Avatar";

const Sidebar = () => {

    return (
        <div className="sidebar">
            <SidebarRow Icon={Avatar}
                        title="Joshua"/>


        </div>

    )

}

export default Sidebar;
