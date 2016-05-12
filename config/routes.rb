Rails.application.routes.draw do

  get 'events/index'

  Rails.application.routes.draw do
  get 'events/index'

    root    "events#index"

    get     "/events", to: "events#index", as: "events"

  end

end
