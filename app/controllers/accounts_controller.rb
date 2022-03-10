class AccountsController < ApplicationController
    def index
        render json: Account.all
    end
end
