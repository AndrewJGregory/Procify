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

require 'rails_helper'

RSpec.describe AlbumSong, type: :model do
  subject { build(:album_song) }

  describe 'validations' do
    it { should validate_presence_of(:album_id) }
    it { should validate_presence_of(:song_id) }
  end

  describe 'associations' do
    it { should belong_to(:song) }
    it { should belong_to(:album) }
  end
end
