class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :recipe_img, :ingredients, :instructions, :users
end
