class User < ApplicationRecord
    has_secure_password
    validates_presence_of :email, :username, :password
    validates_uniqueness_of :email
    validates :username, uniqueness: { case_sensitive: true }
end
