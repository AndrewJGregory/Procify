class Api::PlaylistsController < ApplicationController

  def index

  end

  def create
    @playlist = Playlist.new(playlist_params)
    @playlist.user_id = current_user.id
    
    if @playlist.save
      render :show
    else
      render json: @playlist.errors.messages, status: 422
    end
  end

  def new

  end

  def edit

  end

  def show

  end

  def destroy

  end

  private
  def playlist_params
    params.require(:playlist).permit(:title)
  end
end
