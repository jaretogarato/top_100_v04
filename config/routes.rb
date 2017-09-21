Rails.application.routes.draw do
  namespace :api do
    resources :songs, except: [:new, :edit]
  end

  get '*other', to: 'static#index'

  # get '*other', to: 'static#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
