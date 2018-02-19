# == Schema Information
#
# Table name: playlists
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  user_id    :integer          not null
#  song_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Playlist < ApplicationRecord
  validates :user_id, :title, presence: true

  belongs_to :user

  has_many :playlist_songs

  has_many :songs,
           through: :playlist_songs,
           source: :song
end
