import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export class LoggedInMenu extends Component {
    render() {
        return (
            <div className='navigation-menu'>
                <Link to="/about">About</Link>--
                <Link to="/user">My Recipes</Link>--
                <Link to="/recipes">Recipes</Link>
            </div>
        )
    }
}

export default LoggedInMenu
