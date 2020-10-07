import React, { Component } from 'react'
import LoggedInMenu from '../components/loggedInMenu';

export default class about extends Component {
    render() {
        return (
            <div>
                <LoggedInMenu />
                <p>About page</p>
            </div>
        )
    }
}
