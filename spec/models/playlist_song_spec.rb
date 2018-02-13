# == Schema Information
#
# Table name: playlist_songs
#
#  id          :integer          not null, primary key
#  playlist_id :integer          not null
#  song_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'rails_helper'

RSpec.describe PlaylistSong, type: :model do
  subject { build(:playlist_song) }

  describe 'validations' do
    it { should validate_presence_of(:playlist_id) }
    it { should validate_presence_of(:song_id) }
  end

  describe 'associations' do
    it { should belong_to(:song) }
    it { should belong_to(:playlist) }
  end
end
