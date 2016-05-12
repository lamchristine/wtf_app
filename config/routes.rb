Rails.application.routes.draw do
  root    "events#index"

  get     "/events", to: "events#index", as: "events"

end
