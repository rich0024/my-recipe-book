class User < ApplicationRecord
    has_secure_password

    has_many :my_recipes
    has_many :recipes, through: :my_recipes
end
