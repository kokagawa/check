class Checktime < ApplicationRecord
  validates :text, presence: true
  validates :month, presence: true
  validates :day, presence: true
  validates :hour, presence: true
  validates :minute, presence: true
end
