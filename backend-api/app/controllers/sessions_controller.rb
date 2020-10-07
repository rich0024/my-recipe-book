class SessionsController < ApplicationController

    def create #login
        user = User.find_by(:email => params[:user][:email])
        if user && user.authenticate(params[:user][:password])
            created_jwt = encode_token(id: user.id)
            cookies.signed[:jwt] = {value: created_jwt, httponly: true}

            render json: user
        else 
            render json: {
                error: "error logging in"
        }, status: 404
        end
    end

    def destroy
        cookies.delete(:jwt)

        render json: {
            message: "Successfully logged out"
        }
    end

    def currentUser
        if logged_in?
            render json: serializer_user(current_user)
        else
            render json: {error: "user not logged in."}
        end
    end
end
