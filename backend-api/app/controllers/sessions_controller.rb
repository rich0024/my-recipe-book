class SessionsController < ApplicationController

    def create #login
        user = User.find_ny(:email => params[:user][:email])
        if user && user.authenticate(params[:user][:password])
            token = encode_token(id: user.id)
            cookies.signed[:jwt] = {value:  created_jwt, httponly: true}
            userObj = {
                id: user.id,
                username: user.username,
                email: user.email,
                token: token
            }
            render json: {user: userObj}
        else 
            render json:
                error: "error logging in"  
    end
end
