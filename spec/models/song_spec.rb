# == Schema Information
#
# Table name: songs
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  playlist_id :integer
#  artist_id   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  url         :string
#

require 'rails_helper'

RSpec.describe Song, type: :model do
  subject { build(:song) }

  describe 'validations' do
    it { should validate_presence_of(:title) }
    it { should validate_presence_of(:artist_id) }
  end

  describe 'associations' do
    it { should have_many(:playlist_songs) }
    it { should have_many(:playlists).through(:playlist_songs) }
    it { should have_many(:album_songs) }
    it { should have_many(:albums).through(:album_songs) }
    it { should belong_to(:artist) }
  end
end
