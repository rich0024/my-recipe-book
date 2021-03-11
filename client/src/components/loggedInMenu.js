import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import SignOut from '../components/signout';

export class LoggedInMenu extends Component {
    render() {
        return (
            <div className='navigation-menu'>
                <h2><Link to="/about">About</Link>
                <Link to="/user">My Recipes</Link>
                <Link to="/recipes">Recipes</Link>
                </h2>
                <div className="signout">
                <SignOut />
                </div>
            </div>
        )
    }
}

export default LoggedInMenu
