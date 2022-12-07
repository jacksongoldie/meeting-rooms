class ReservationsController < ApplicationController
    before_action :set_user, only: [:create, :update, :destroy]

    def index
        reservations = Reservation.all.order(start_date: :asc)
        render json: reservations, status: :ok
    end

    def show
        render json: reservation, status: :ok
    end

    def create
        #changed from setting Reservation.create to user.reservations.create to try helping with validations
        # user = User.find(params[:user_id])
        # reservation = user.reservations.create!(reservation_params)
        reservation = @user.reservations.create!(reservation_params)
        #reservation = Reservation.create!(reservation_params)
        render json: reservation, status: :created
    end

    def update
        if @user.id == reservation.user.id
            reservation.update!(reservation_params)
            render json: reservation, status: :created
        else
            render json: { errors: "Not authorized"}, status: :unauthorized
        end
    end

    def destroy
        if @user.id == reservation.user.id
            reservation.destroy
            head :no_content
        else
            render json: { errors: "Not authorized"}, status: :unauthorized
        end
    end

    private 

    def reservation
        Reservation.find(params[:id])
    end

    def reservation_params
        params.permit(:start_date, :end_date, :room_id)
    end
end
