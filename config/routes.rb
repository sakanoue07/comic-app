Rails.application.routes.draw do
  root to: redirect('/map')
  get 'map', to: 'site#index'
  get 'signup', to: 'site#index'

  namespace :api do
    namespace :v1 do
      resources :users
    end
  end
end
