Rails.application.routes.draw do
  resources :my_recipes
  resources :recipes
  resources :users
  post '/login' => 'sessions#create'
  delete '/logout' => 'sessions#destroy'
  get '/currentUser' => 'sessions#currentUser'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
