class Job < ApplicationRecord
  belongs_to :company
  has_one :address

  enum job_type: {
    full_time: 0,
    contract: 1,
    internship: 2
  }
end
