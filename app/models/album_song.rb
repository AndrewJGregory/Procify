# == Schema Information
#
# Table name: album_songs
#
#  id         :integer          not null, primary key
#  album_id   :integer          not null
#  song_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class AlbumSong < ApplicationRecord
  validates :album_id, :song_id, presence: true

  belongs_to :song
  belongs_to :album
end
