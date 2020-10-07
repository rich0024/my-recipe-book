class Recipe < ApplicationRecord
    has_many :users, through: :my_recipes

end
