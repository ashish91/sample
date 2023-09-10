class Api::CompaniesController < ApplicationController
  skip_before_action :authenticate_user!

  def index
    @companies = Company.all
  end

  private
    def company_params
      params.fetch(:job, {}).permit(:title)
    end
end
