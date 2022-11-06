import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';

function NavTabs() {
    const [activeTab, setActiveTab] = React.useState(0)

    return (
        <>
            <div className=".horizontal_tabs">
                <Tabs value={activeTab} onChange={(e, v) => setActiveTab(v)} aria-label="icon label tabs example">
                    <Tab icon={<PhoneIcon />} label="Home" />
                    <Tab icon={<FavoriteIcon />} label="FAVORITES" />
                    <Tab icon={<PersonPinIcon />} label="PROFILE" />
                </Tabs>
            </div>
            <div className=".vertical_tabs">
                <Tabs value={activeTab} orientation="vertical" onChange={(e, v) => setActiveTab(v)} aria-label="icon label tabs example">
                    <Tab icon={<PhoneIcon />} label="Home" />
                    <Tab icon={<FavoriteIcon />} label="FAVORITES" />
                    <Tab icon={<PersonPinIcon />} label="PROFILE" />
                </Tabs>
            </div>
        </>
    )
}

export default NavTabs
