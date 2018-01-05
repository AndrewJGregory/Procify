# == Schema Information
#
# Table name: songs
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  playlist_id :integer          not null
#  album_id    :integer          not null
#  artist_id   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Song < ApplicationRecord
  validates :title, :album_id, :artist_id, :playlist_id, presence: true
  has_attached_file :musicfile, default_url: "missing.png"
  validates_attachment_content_type :musicfile, content_type: /\Aaudio\/.*\Z/
end
