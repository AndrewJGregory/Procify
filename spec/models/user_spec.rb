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
  describe 'validation tests:' do
    describe 'username' do
      it { should validate_presence_of(:username).with_message("Please enter your Procify username.") }

      subject { build(:user) }
      it { should validate_uniqueness_of(:username).with_message("Username has already been taken. Try another username.")}
    end

  end
end
