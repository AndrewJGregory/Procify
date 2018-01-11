class CreateAlbumSongs < ActiveRecord::Migration[5.1]
  def change
    create_table :album_songs do |t|
      t.integer :album_id, null: false
      t.integer :song_id, null: false
      t.timestamps
    end
  end
end
