class CreateAddresses < ActiveRecord::Migration[6.0]
  def change
    create_table :addresses do |t|
      t.string :city
      t.string :state
      t.string :country
      t.string :zip
      t.decimal :lat
      t.decimal :lng

      t.timestamps
    end
  end
end
