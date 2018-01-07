class Api::PlaylistsController < ApplicationController

  def index
    @playlists = current_user.playlists
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
    @playlist = Playlist.find(params[:id])
    @songs = @playlist.songs
  end

  def destroy

  end

  private
  def playlist_params
    params.require(:playlist).permit(:title, :playlist_id)
  end
end
