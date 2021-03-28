class Api::V1::UsersController < ApplicationController
    def index
        users = User.order(created_at: :desc)
        # render json: {status: 'success',data: users}
        render json: users
    end
end