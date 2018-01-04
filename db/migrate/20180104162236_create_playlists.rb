class CreatePlaylists < ActiveRecord::Migration[5.1]
  def change
    create_table :playlists do |t|
      t.string :title, null: false
      t.integer :user_id, null: false
      t.integer :song_id

      t.timestamps
    end
  end
end
