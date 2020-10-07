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

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = event => {
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
                    <h2>Add Recipe!</h2>
                    <input type="name" name="name" placeholder="name" value={this.state.username} onChange={this.handleOnChange} />
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
        )
    }
}

const mapStateToProps = ({ recipes }) => {
    return{
        recipes: recipes
    }
}
export default connect(mapStateToProps, { createRecipe, fetchRecipes }) (Cook)