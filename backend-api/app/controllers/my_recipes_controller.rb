class MyRecipesController < ApplicationController
    def index
        my_recipes = MyRecipe.all
        render json: recipes
    end

    def create
        my_recipe = MyRecipe.new(my_recipe_params)
        if my_recipe.save
            render json: my_recipe
        else
            render json: {error: 'Error adding recipe'}
        end
    end

    def destroy
        my_recipe = MyRecipe.find(params[:id])
        my_recipe.destroy
    end
    
    private

    def my_recipe_params
        params.require(:recipe).permit(:user_id, :recipe_id)
    end
end
