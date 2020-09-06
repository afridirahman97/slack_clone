import React from 'react'
import './Header.css';
import { Avatar } from "@material-ui/core"
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import SearchIcon from '@material-ui/icons/Search'
import HelpOutLineIcon from '@material-ui/icons/HelpOutline'
import { useStateValue } from './StateProvider'

function Header() {
    const [{ user }] = useStateValue()

    return (
        <div className="header">
            <div className="header__left">
                <Avatar 
                  className="header__avatar"
                  alt={user?.displayName}
                  src={user?.photoURL}
                />
                <AccessTimeIcon />
                </div>
                <div className="header__search">
                <SearchIcon />
                <input placeholder="Search"></input>
                </div>

                <div className="header__right">
               <HelpOutLineIcon />
                
                </div>


        </div>
    )
}

export default Header
