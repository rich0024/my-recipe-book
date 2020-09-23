class CreateRecipes < ActiveRecord::Migration[6.0]
  def change
    create_table :recipes do |t|
      t.string :recipe_img
      t.string :ingredients
      t.string :instructions

      t.timestamps
    end
  end
end
