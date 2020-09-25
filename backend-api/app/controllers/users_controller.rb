class UsersController < ApplicationController

    def index
        @users = User.All

        render json: @users
    end

    def show
        @user = User.find_by(id: params.id)

        render json: @user
    end

    def create
        user = User.new(user_params)
        if @user.save
            render json: @user
          else
            render json: {error: 'Error creating user'}
          end

        render json: user
    end

    def update
        @user = User.find_by(id: params.id)
    end

    private

    def user_params
        params.require(:user).permit(:name, :email, :password)
    end
end
