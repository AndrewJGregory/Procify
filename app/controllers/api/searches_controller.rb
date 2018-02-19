class Api::SearchesController < ApplicationController
  def create
    query = search_params['query'].downcase
    @albums = Album.where('lower(title) LIKE ?', "#{query}%")
    @artists = Artist.where('lower(name) LIKE ?', "#{query}%")
    @songs = Song.where('lower(title) LIKE ?', "#{query}%")
    @playlists = Playlist.where('lower(title) LIKE ?', "#{query}%")
  end

  private

  def search_params
    params.require(:search).permit(:query)
  end
end
