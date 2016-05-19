class EventsController < ApplicationController

  def index


    # Filters out events that were created longer than precribed time;
    # can be changed to e.g. 1 hour ago by changing 365.days.ago to 1.hours.ago
    if params[:unit] && params[:num]
      unit = params[:unit].to_s
      num = params[:num].to_i
      if unit == "hours"
        @events = Event.where(created_at: num.hours.ago..Time.now)
      elsif unit == "months"
        @events = Event.where(created_at: num.months.ago..Time.now)
      end
    else
      @events = Event.where(created_at: 12.months.ago..Time.now)
    end

    # HASH SENT TO JAVASCRIPT (AKA EVENTHASH)
    @hash = Gmaps4rails.build_markers(@events) do |event, marker|
      marker.lat event.latitude
      marker.lng event.longitude

      if event.category == "Heard It"
        marker.picture({
          "url" => view_context.image_path('heard_icon_30.png'),
          "width" => 30,
          "height" => 30
          })
      else
        marker.picture({
          "url" => view_context.image_path('eye_icon_20.png'),
          "width" => 30,
          "height" => 30
          })
      end

      marker.infowindow render_to_string(:partial => "/events/info", :locals => { :title => event.title,
        :user_path => user_path(event.user), :username => event.user.username, :content => event.content,
        :user => event.user, :avatar => event.user.avatar, :category => event.category, :event => event,
        :user_id => event.user.id
      })
    end
    @hash.last[:user_id] = @events.last.user.id
  end




  def new
     @user = User.find_by(id: params[:user_id])
     @event = Event.new
     if params[:category]
       @event.category = params[:category]
     end
     render :new
  end

  def create
    @user = current_user
    @event = Event.new(event_params)

    if params[:event][:address].blank?
      @event.address = params[:coordinates]
      coords = params[:coordinates].split(',')
      @event.latitude = coords[0]
      @event.longitude = coords[1]
    else
      @event.address = params[:event][:address]
    end
    
    @event.save
    @user.events << (@event)

    if @event.save
      redirect_to root_path
    else
      flash[:error] = @event.errors.full_messages.to_sentence
      redirect_to new_user_event_path(@event[:user_id])
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

  def upvote
    @event = Event.find_by(id: params[:event_id])

    respond_to do |format|

      format.html { redirect_to :back }
      format.json { head :no_content }
      format.js { render :layout => false }

      @event.liked_by current_user

    end
  end

  def downvote
    @event = Event.find_by(id: params[:event_id])

    respond_to do |format|

      format.html { redirect_to :back }
      format.json { head :no_content }
      format.js { render :layout => false }

      @event.downvote_by current_user

    end
  end

  private
  def event_params
    params.require(:event).permit(:title, :content, :category, :longitude, :latitude, :address)
  end
end
