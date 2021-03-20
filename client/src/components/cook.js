import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createRecipe, fetchRecipes} from '../actions/recipeAction';

export class Cook extends Component {
    state = {
        name: "",
        picture: "",
        ingredients: "",
        instructions: ""
    }

    // shouldComponentUpdate() {
    //     return true
    // }
    handleOnClick = event => {
        if (document.querySelector('.add').style.display == 'none') {
            document.querySelector('.add').style.display = 'flex'
        }
        else {
            document.querySelector('.add').style.display = 'none'
        }
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
            <div className='cook'>
            <br></br>
            <br></br>
            <div className="add">
                <form onSubmit={this.handleOnSubmit}>
                    <h2>Add Recipe!</h2>
                    <input type="name" name="name" placeholder="name" value={this.state.name} onChange={this.handleOnChange} />
                    <br></br>
                    <input type="picture" name="picture" placeholder="picture" value={this.state.picture} onChange={this.handleOnChange} />
                    <br></br>
                    <textarea type="ingredients" name="ingredients" placeholder="ingredients" value={this.state.ingredients} onChange={this.handleOnChange} />
                    <br></br>
                    <textarea type="instructions" name="instructions" placeholder="instructions" value={this.state.instructions} onChange={this.handleOnChange} />
                    <br></br>
                    <input type="submit"/>
                </form>
            </div>
            <div>
                <button className='add-button' onClick={this.handleOnClick}>Add a Recipe!</button>
            </div>
            </div>
        )
    }

}


export default connect(null, { createRecipe, fetchRecipes }) (Cook)