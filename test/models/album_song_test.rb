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

require 'test_helper'

class AlbumSongTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
