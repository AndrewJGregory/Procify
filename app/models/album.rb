# == Schema Information
#
# Table name: albums
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  img_url    :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  artist_id  :integer          not null
#

class Album < ApplicationRecord
  validates :title, :img_url, presence: true

  has_many :album_songs
  belongs_to :artist
  has_many :songs,
  through: :album_songs,
  source: :song
end
