class RenameLengthColSong < ActiveRecord::Migration[5.1]
  def change
    rename_column :songs, :length, :url
  end
end
