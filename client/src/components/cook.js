import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createRecipe } from '../actions/recipeAction'

export class Cook extends Component {
    state = {
        name: "",
        picture: "",
        ingredients: "",
        instructions: ""
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        this.props.createRecipe(this.state);
        this.setState({
            name: "",
            picture: "",
            ingredients: "",
            instructions: ""
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <h2>Sign Up!</h2>
                    <input type="name" name="name" placeholder="name" value={this.state.username} onChange={this.handleOnChange} />
                    <br></br>
                    <input type="picture" name="picture" placeholder="picture" value={this.state.picture} onChange={this.handleOnChange} />
                    <br></br>
                    <input type="ingredients" name="ingredients" placeholder="ingredients" value={this.state.ingredients} onChange={this.handleOnChange} />
                    <br></br>
                    <input type="instructions" name="instructions" placeholder="instructions" value={this.state.instructions} onChange={this.handleOnChange} />
                    <br></br>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default connect(null, { createRecipe }) (Cook)