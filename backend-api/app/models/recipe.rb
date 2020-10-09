class Recipe < ApplicationRecord
    has_many :my_recipes
    has_many :users, through: :my_recipes

end
