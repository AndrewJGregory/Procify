# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  email           :string           not null
#  birthday        :string           not null
#

require 'rails_helper'

RSpec.describe User, type: :model do
  subject { build(:user) }
  describe 'validation tests:' do
    it { should validate_presence_of(:password_digest) }
    it { should validate_presence_of(:session_token) }
    it { should validate_presence_of(:birthday).with_message('When were you born?') }
    it { should validate_presence_of(:email).with_message('Please enter your email.') }
    it { should validate_presence_of(:username).with_message('Please enter your Procify username.') }
    it { should validate_uniqueness_of(:username).with_message('Username has already been taken. Try another username.')}
    it {
      should validate_length_of(:password).
      is_at_least(6).
      with_message('Your password is too short. Minimum is 6 characters.')
    }
  end

end
