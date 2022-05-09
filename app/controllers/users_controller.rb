class UsersController < ApplicationController
    before_action :set_user, only: [:show]

    def index
        render json: User.all
    end

    def show
        render json: @user, include: ['reservations.room']
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
