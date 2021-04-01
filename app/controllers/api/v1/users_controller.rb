class Api::V1::UsersController < ApplicationController
    def index
        users = User.order(created_at: :desc)
        # render json: {status: 'success',data: users}
        render json: users
    end
    def create
        user = User.create!(
            username: params[:user][:username],
            email: params[:user][:email],
            password: params[:user][:password],
            password_confirmation: params[:user][:password_confirmation]
        )
        if user
            session[:user_id] = user.id
            if session[:user_id]
                @current_user = User.find_by(id: session[:user_id]) 
            end
            logger.debug("create")
            logger.debug(@current_user)
            render json: {
              status: :created,
              user: user
            }
        else
            render json: { status: 500 }
        end
    end
end