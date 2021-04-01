class ApplicationController < ActionController::Base
    helper_method :current_user, :logged_in, :logout
    protect_from_forgery with: :null_session
    def current_user
        if session[:user_id]
        current_user ||= User.find(session[:user_id])
        end
    end

    def logged_in
        if current_user.nil?
          render json: {
            logged_in: true,
            user: current_user
          }
        else
          render json: {
            logged_in: false
          }
        end
    end

    def logout
        session[:user_id] = nil
        current_user = nil
        render json: { status: 201, logout: @current_user }
    end

end
