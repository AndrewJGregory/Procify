# == Schema Information
#
# Table name: songs
#
#  id                     :integer          not null, primary key
#  title                  :string           not null
#  playlist_id            :integer
#  album_id               :integer          not null
#  artist_id              :integer          not null
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  musicfile_file_name    :string
#  musicfile_content_type :string
#  musicfile_file_size    :integer
#  musicfile_updated_at   :datetime
#  url                    :string
#

class Song < ApplicationRecord
  validates :title, :album_id, :artist_id, presence: true
  has_attached_file :musicfile, default_url: "missing.png"
  validates_attachment_content_type :musicfile, content_type: /\Aaudio\/.*\Z/

  has_many :playlist_songs

  has_many :playlists,
  through: :playlist_songs,
  source: :playlist
end
