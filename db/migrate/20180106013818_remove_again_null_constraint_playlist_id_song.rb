class RemoveAgainNullConstraintPlaylistIdSong < ActiveRecord::Migration[5.1]
  def change
    change_column :songs, :playlist_id, :integer, :null => true
  end
end
