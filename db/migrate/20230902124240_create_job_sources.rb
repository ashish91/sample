class CreateJobSources < ActiveRecord::Migration[6.0]
  def change
    create_table :job_sources do |t|
      t.string :name
      t.string :url

      t.timestamps
    end
  end
end