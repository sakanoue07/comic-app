Rails.application.routes.draw do
  root to: 'site#index'
  get 'sessions/create'
  get '/top', to: 'site#index'
  get '/signup', to: 'site#index'

  namespace :api do
    namespace :v1 do
      resources :sessions, only: :create 
      resources :users, only: [:create, :index]
      # delete '/todos/destroy_all', to: 'todos#destroy_all'
      delete '/sessions/logout', to: "sessions#logout"
    end
  end
end
