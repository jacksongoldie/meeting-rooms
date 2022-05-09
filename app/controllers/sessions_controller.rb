class SessionsController < ApplicationController

    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, include: ['reservations.room'], status: :created
        else
            render json: { errors: ["Invalid Entry"] }, status: :unauthorized
        end
    end

    def destroy
        if session[:user_id]
            session.destroy
            head :no_content
        end
    end
    
end
