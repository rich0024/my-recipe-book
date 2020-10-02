import React, { Component } from 'react';
import {connect} from 'react-redux';
import Cook from '../components/cook';
import SignOut from '../components/signout';
import {createRecipe} from '../actions/recipeAction';


class Recipes extends Component {
    render() {
        return (
            <div>
                <Cook createRecipe={this.props.createRecipe}/>
                <SignOut />
            </div>
        )
    }
}

export default connect(null, {createRecipe})(Recipes)
