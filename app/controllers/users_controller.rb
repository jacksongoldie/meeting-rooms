class UsersController < ApplicationController
    def index
        render json: User.all
    end

    def show
        user = User.find(session[:user_id])
        render json: user, include: ['reservations', 'reservations.room']
    end

    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation, :name, :email, :account_id)
    end
end
