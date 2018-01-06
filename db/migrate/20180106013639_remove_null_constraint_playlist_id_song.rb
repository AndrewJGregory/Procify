class RemoveNullConstraintPlaylistIdSong < ActiveRecord::Migration[5.1]
  def change
    change_column :songs, :playlist_id, :integer
  end
end
