class Api::SongsController < ApplicationController
  def index
    @songs = Song.all
    debugger
  end
end
