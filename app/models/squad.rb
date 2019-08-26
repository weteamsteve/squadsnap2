class Squad < ApplicationRecord
  validates :name, presence: true
  validates :sport, presence: true
  validates :owner_id, presence: true
  # Asssociations
  has_many :members, :dependent => :delete_all
  has_many :users, through: :members
end
