class User < ApplicationRecord
    has_secure_password

    has_many :recipes, through: :my_recipes
end
