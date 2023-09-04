module JobsHelper
  def job_types
    job_types = []

    Job.job_types.map do |type, id|
      job_types.push([type, id])
    end
    job_types
  end
end
