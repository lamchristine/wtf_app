class EventsController < ApplicationController

  def index
    @events = Event.all
    render :index
  end

  def new
     @user = User.find_by(id: params[:user_id])
     @event = Event.new
     render :new
  end

  def create
    @user = current_user
    @event = Event.create(event_params)
    @user.events << (@event)

    if @event.save
      redirect_to root_path
    else
      flash[:error] = @event.errors.full_messages.to_sentences
      redirect_to new_user_event_path(event[:user_id])
    end
  end

  def edit
     @event = Event.find_by(id: params[:id])

     if current_user == @event.user
       render :edit
     else
       flash[:error] = "You can only edit your own events"
       redirect_to to root_path
     end
  end

  def update
    event = Event.find_by(id: params[:id])
    event.update(event_params)
    redirect_to root_path
  end

  def destroy
    event = Event.find_by(id: params[:id])
    event.destroy
    redirect_to user_path(current_user)
  end


  private
  def event_params
    params.require(:event).permit(:title, :content, :category)
  end
end
