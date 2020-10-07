class AddBelongsToToMyRecipes < ActiveRecord::Migration[6.0]
  def change
    add_reference :my_recipes, :user
    add_reference :my_recipes, :recipe
  end
end
