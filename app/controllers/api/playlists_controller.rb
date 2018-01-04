class Api::PlaylistsController < ApplicationController

  def index

  end

  def create
    @playlist = Playlist.new(playlist_params)

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
    params.require(:playlist).permit(:title, :user_id)
  end
end
