import React, { Component } from 'react'
import LoggedInMenu from '../components/loggedInMenu';
import SignOut from '../components/signout';

export default class about extends Component {
    render() {
        return (
            <div>
                <LoggedInMenu />
                <SignOut />
                <h1>About page</h1>
                <p>Welcome to My Recipe Book! As time goes on family gets bigger and unfortunately, further as well; kids grow up and move on to start their own lives. However, as far as family gets, there is something about a family recipe that brings one right back to that feeling of family. My Recipe Book allows one to store and share these family recipes.</p>
            </div>
        )
    }
}
