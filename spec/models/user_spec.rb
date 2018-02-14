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
  let(:valid_user) { User.first }

  describe 'validations' do
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

  describe 'instance methods' do

    describe '#generate_session_token' do
      it 'generates a string' do
        session_token = subject.generate_session_token
        expect(session_token).to be_a String
      end
    end

  end

  describe '#reset_session_token' do
    it 'saves the user to the database' do
      expect(subject).to receive(:save!)
      subject.reset_session_token
    end

    it 'changes the user\'s session token' do
      old_token = subject.session_token
      subject.reset_session_token
      new_token = subject.session_token
      expect(old_token).not_to eql(new_token)
    end
  end

  describe '#is_password?' do
    it 'returns true when passed the correct password' do
      expect(subject.is_password?('password')).to be_truthy
    end

    it 'returns false when passed an incorrect password' do
      expect(subject.is_password?('notmypassword')).to be_falsy
    end
  end

  describe '#password=' do
    it 'sets the password digest' do
      subject.password = 'anewpassword'
      expect(subject.password_digest).to be_a String
    end
  end

  describe '#ensure_session_token' do
    it 'sets the session token' do
      subject.ensure_session_token
      expect(subject.session_token).to be_a String
    end

    it 'does not reset session token when the user already has one' do
      subject.ensure_session_token
      old_token = subject.session_token
      subject.ensure_session_token
      new_token = subject.session_token
      expect(old_token).to eq(new_token)
    end
  end

  describe 'class methods' do
    describe '::find_by_credentials' do
      it 'returns the correct user when passed valid credentials' do
        subject.save!
        user = User.find_by_credentials('andrew', 'password')
        expect(user).to eq(subject)
      end

      it 'returns nil when passed invalid credentials' do
        user = User.find_by_credentials('notauser', 'badpassword')
        expect(user).to be_nil
      end
    end
  end
  describe 'associations:' do
      it { should have_many(:playlists) }
  end
end
