Rails.application.routes.draw do
  root to: redirect('/map')
  get 'map', to: 'site#index'
end
