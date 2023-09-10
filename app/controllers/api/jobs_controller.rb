class Api::JobsController < ApplicationController
  skip_before_action :authenticate_user!

  def create
    @job = Job.new(job_params)

    if @job.save!
      render :create, status: 201
    else
    end
  end

  private
    def job_params
      params.fetch(:job, {}).permit(:title)
    end
end
