class AddAttachmentMusicfileToSongs < ActiveRecord::Migration[4.2]
  def self.up
    change_table :songs do |t|
      t.attachment :musicfile
    end
  end

  def self.down
    remove_attachment :songs, :musicfile
  end
end
