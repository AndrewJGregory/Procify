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

require 'rails_helper'

RSpec.describe Playlist, type: :model do
  subject { build(:playlist) }

  describe 'validations' do
    it { should validate_presence_of(:user_id) }
    it { should validate_presence_of(:title) }
  end

  describe 'associations' do
    it { should belong_to(:user) }
    it { should have_many(:playlist_songs) }
    it { should have_many(:songs).through(:playlist_songs) }
  end
end
