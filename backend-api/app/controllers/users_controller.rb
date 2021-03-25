class UsersController < ApplicationController
    before_action :authenticate_user, only: [:show]

    def index
        users = User.all
        if users
            render json: users
        else 
            render json: {
                error: 'no users found'
            }, status: 500
        end
    end

    def show
        user = User.find(params[:id])
        if user
            render json: user.recipes
        else
            render json: {
                status: 500,
                errors: ['no users found']
            }
        end
    end

    def create
        user = User.new(user_params)
        if user.save
        created_jwt = encode_token({id: user.id})
        cookies.signed[:jwt] = {value: created_jwt, httponly: true, expires: 1.hour.from_now, SameSite=None}
        render json: user
        else
            render json: {error: 'Error creating user'}
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :email, :password)
    end
end
