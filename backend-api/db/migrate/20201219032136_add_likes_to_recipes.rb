class AddLikesToRecipes < ActiveRecord::Migration[6.0]
  def change
    add_column :recipes, :likes, :integer
  end
end
