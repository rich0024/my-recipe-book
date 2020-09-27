class UsersController < ApplicationController

    def index
        @users = User.all

        render json: @users
    end

    def show
        @user = User.find(params[:id])

        render json: @user
    end

    def create
        @user = User.new(user_params)
        if @user.save
           created_jwt = issue_token({id: @user.id})
           cookies.signed[:jwt] = {value: created_jwt, httponly: true, expires: 1.hour.from_now}
           render json: UserSerializer.new(@user).serialized_json
        else
            render json: {error: 'Error creating user'}
    end

        render json: user
    end

    def update
        @user = User.find(params[:id])
    end

    private

    def user_params
        params.require(:user).permit(:username, :email, :password)
    end
end
