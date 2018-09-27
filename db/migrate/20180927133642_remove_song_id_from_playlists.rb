class RemoveSongIdFromPlaylists < ActiveRecord::Migration[5.1]
  def change
    remove_column :playlists, :song_id, :integer
  end
end
