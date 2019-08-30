Rails.application.routes.draw do
  devise_for :users#, defaults: {format: 'json'}
  namespace :api, defaults: {format: 'json'} do
    namespace :v1 do
      get 'squads/index'
      post 'squads/create'
      get 'show/:id', to: 'squads#show'
      delete 'destroy/:id', to: 'squads#destroy'

      get 'members/index'
      get 'members/showForSquad/:id', to: 'members#showForSquad'
      get 'members/showForUser/:id', to: 'members#showForUser'
    end
  end

  get 'users/check_for_user', to: 'users#check_for_user'
  #delete '/', to: 'users#sign_out'

  root 'homepage#index'
  get '/*path' => 'homepage#index'
  # Catch all route with get '/*path' that will direct any other request
  # that doesn’t match the existing routes to the index action of the homepage controller.
  # This way, the routing on the frontend will handle requests that are not related to creating, reading, or deleting squads.
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
