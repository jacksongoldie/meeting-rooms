class ReservationsController < ApplicationController
    
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
        reservation = Reservation.create!(reservation_params)
        render json: reservation, status: :created
    end

    def update
        reservation.update!(reservation_params)
        render json: reservation, status: :created
    end

    def destroy
        reservation.destroy
        head :no_content
        #redirect?
    end

    private 

    def reservation
        Reservation.find(params[:id])
    end

    def reservation_params
        params.permit(:start_date, :end_date, :room_id, :user_id)
    end
end
