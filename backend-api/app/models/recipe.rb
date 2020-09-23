class Recipe < ApplicationRecord
    validates :recipe_img, :ingredients, :instructions
end
