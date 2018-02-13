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

require 'rails_helper'

RSpec.describe Album, type: :model do
  subject { build(:album) }
  describe 'validations' do
    it { should validate_presence_of(:title) }
    it { should validate_presence_of(:img_url) }
  end

  describe 'associations' do
    it { should have_many(:album_songs) }
    it { should belong_to(:artist) }
    it { should have_many(:songs).through(:album_songs) }
  end
end
