# == Schema Information
#
# Table name: artists
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  img_url    :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'rails_helper'

RSpec.describe Artist, type: :model do
  subject { build(:artist) }

  describe 'validation tests:' do
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:img_url) }
  end

  describe 'associations' do
    it { should have_many(:albums) }
    it { should have_many(:songs).through(:albums) }

  end
end
