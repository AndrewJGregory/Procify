class AddArtistIdColToAlbums < ActiveRecord::Migration[5.1]
  def change
    add_column :albums, :artist_id, :integer, null: false
  end
end
