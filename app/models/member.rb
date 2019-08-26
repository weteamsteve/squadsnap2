class Member < ApplicationRecord
  validates :membership, presence: true
  validates :user, presence: true
  validates :squad, presence: true
  # Associations
  belongs_to :user
  belongs_to :squad
end
