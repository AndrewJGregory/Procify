class Api::SearchesController < ApplicationController
  def create
    query = search_params['query'].downcase
    @albums = Album.where('title LIKE ?', "#{query}%")
    @artists = Artist.where('name LIKE ?', "#{query}%")
    @songs = Song.where('title LIKE ?', "#{query}%")
    @playlists = Playlist.where('title LIKE ?', "#{query}%")
  end

  private
  def search_params
    params.require(:search).permit(:query)
  end
end
