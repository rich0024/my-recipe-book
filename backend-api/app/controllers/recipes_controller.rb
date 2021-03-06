class RecipesController < ApplicationController

    def index
        recipes = Recipe.all
        render json: recipes
      end
  
      def create
        recipe = Recipe.new(recipe_params)
        if recipe.save
          render json: recipe
        else
          render json: {error: 'Error creating recipe'}
        end
      end
  
      def show
        recipe = Recipe.find(params[:id])
        render json: recipe
      end
  
      def destroy
        recipe = Recipe.find(params[:id])
        recipe.destroy
      end
  
      def update
        recipe = Recipe.find(params[:id])
        recipe.update(name: params["recipe"]["name"], recipe_img: params["recipe"]["recipe_img"], ingredients: params["recipe"]["ingredients"], instructions: params["recipe"]["instructions"])
        recipe.save
        render json: recipe
      end
  
      private
  
      def recipe_params
        params.require(:recipe).permit(:name, :recipe_img, :ingredients, :instructions)
      end
end
