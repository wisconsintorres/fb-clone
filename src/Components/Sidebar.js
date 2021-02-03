import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow'
import {MailOutline, Gavel, AccountBalance, Event, People} from "@material-ui/icons";

const Sidebar = () => {

    return (
        <div className="sidebar">
            <SidebarRow src ='https://uwm.edu/informationstudies/wp-content/uploads/sites/229/2018/09/profile_torres_j2.jpg'
                        title="Joshua"/>
            <SidebarRow Icon={Gavel}
                        title="Executive Orders"/>
            <SidebarRow Icon={AccountBalance}
                        title="Congressional Bills"/>
            <SidebarRow Icon={People}
                        title="Elected Officials"/>
            <SidebarRow Icon={Event}
                        title="Upcoming Elections"/>
            <SidebarRow Icon={MailOutline}
                        title="Contact Reps"/>


        </div>

    )

}

export default Sidebar;
