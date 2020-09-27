class ApplicationController < ActionController::API
    include ::ActionController::Cookies 

    #def current_user
        # User.find_by(id: authenticate_user)
        #@current_user ||= User.find_by(id: authenticate_user)
    #end
    
    #def logged_in?
        #!!current_user
    #end
    
    def encode_token(payload)
        JWT.encode(payload, "$up3r $ecr3t", "HS256")
    end
    
    #def authenticate_user
        #jwt = cookies.signed[:jwt]
        #decode_jwt(jwt)
        # decode_jwt(jwt, "$up3r $ecr3t", "HS256")[0]["id"]
        # JWT.decode(jwt, "$up3r $ecr3t", "HS256")
    #end
end
