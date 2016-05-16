class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :confirmable

  has_many :events
  acts_as_voter

  # def avatar
  #   avatar.present? ? avatar.url : "userprofile.png"
  # end

end
