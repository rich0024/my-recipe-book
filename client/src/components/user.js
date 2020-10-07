import React, { Component } from 'react';
import LoggedInMenu from '../components/loggedInMenu';
import {fetchMyRecipes} from '../actions/myRecipeAction';


export class user extends Component {
    
    render() {
        return (
            <div>
                <LoggedInMenu />
            </div>
        )
    }
}

export default user

