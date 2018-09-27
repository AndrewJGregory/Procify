# == Schema Information
#
# Table name: songs
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  artist_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  url        :string
#

class Song < ApplicationRecord
  validates :title, :artist_id, presence: true

  has_many :playlist_songs

  has_many :playlists,
           through: :playlist_songs,
           source: :playlist

  has_many :album_songs

  has_many :albums,
           through: :album_songs,
           source: :album

  belongs_to :artist
end
