class Checktime < ApplicationRecord
  validates :plan, presence: true
  validates :month, presence: true
  validates :day, presence: true
  validates :hour, presence: true
  validates :minute, presence: true
end
