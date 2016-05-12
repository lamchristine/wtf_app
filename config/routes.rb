Rails.application.routes.draw do
  root    "events#index"

  get     "/events", to: "events#index", as: "events"


  resources :users do
  end

end



# root GET    /                         events#index
# events GET    /events(.:format)         events#index
# users GET    /users(.:format)          users#index
#       POST   /users(.:format)          users#create
# new_user GET    /users/new(.:format)      users#new
# edit_user GET    /users/:id/edit(.:format) users#edit
#  user GET    /users/:id(.:format)      users#show
#       PATCH  /users/:id(.:format)      users#update
#       PUT    /users/:id(.:format)      users#update
#       DELETE /users/:id(.:format)      users#destroy
