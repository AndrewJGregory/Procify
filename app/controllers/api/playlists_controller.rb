class Api::PlaylistsController < ApplicationController

  def index
    @playlists = current_user.playlists
  end

  def create
    @playlist = Playlist.new(playlist_params)
    @playlist.user_id = current_user.id

    if @playlist.save
      render :new
    else
      render json: @playlist.errors.messages, status: 422
    end
  end

  def show
    @playlist = Playlist.find(params[:id])
    @songs = @playlist.songs
  end

  def destroy
    @playlist = Playlist.find(params[:id])
    Playlist.delete(@playlist.id)
    render :new
  end

  def update
    @playlist = Playlist.find(params[:id])

    PlaylistSong.create(
      song_id: params[:songId],
      playlist_id: params[:id]
    )
    @playlist.songs.reload
    @songs = @playlist.songs
    render 'api/playlists/show'
  end

  private
  def playlist_params
    params.require(:playlist).permit(:title, :playlist_id, :song_id, :user_id)
  end
end
