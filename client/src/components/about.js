import React, { Component } from 'react'
import LoggedInMenu from '../components/loggedInMenu';

export default class about extends Component {
    render() {
        return (
            <div>
                <LoggedInMenu />
                <br></br>
                <br></br>
                <br></br>
            <div className="about">
                <h1>About page</h1>
                <p>Welcome to My Recipe Book! As time goes on family gets bigger and unfortunately, further as well; kids grow up and move on to start their own lives. However, as far as family gets, there is something about a family recipe that brings one right back to that feeling of family. My Recipe Book allows one to store and share these family recipes.</p>
                <h2>Upcoming Edits</h2>
                <p>-Looking to add profiles wih username routes</p>
                <p>-following certain profiles</p>
                <p>-upvote/likes</p>
                <p>-tags for searches</p>
                <p>-customized feed</p>
                <p>-discover section</p>
                <p>-updated styling with bootstrap</p>
            </div>
            </div>
        )
    }
}
