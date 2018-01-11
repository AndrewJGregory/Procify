class Api::SongsController < ApplicationController
  def index
    @songs = Song.all.includes(:playlists)
  end

  def destroy
    @song = Song.find(params[:id])
    record = PlaylistSong.find_by(
      song_id: params[:id],
      playlist_id: params[:playlistId]
    )
    PlaylistSong.delete(record.id)
    @playlists = @song.playlists
    render 'api/songs/show'
  end
end
