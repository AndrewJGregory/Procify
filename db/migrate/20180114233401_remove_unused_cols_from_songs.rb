class RemoveUnusedColsFromSongs < ActiveRecord::Migration[5.1]
  def change
    remove_column :songs, :musicfile_file_name
    remove_column :songs, :musicfile_content_type
    remove_column :songs, :musicfile_file_size
    remove_column :songs, :musicfile_updated_at
  end
end
