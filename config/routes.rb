Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root  'checktimes#new' 
  resources :alarms
  get 'alarms/:id' => 'alarms#show'
  delete 'checktimes/:id' =>'checktimes#destroy'

end
