class JobSearchService
  def initialize(params)
    @params = params
  end

  def search
    return [] if @params.blank?

    build_query
  end

  private
    def build_query
      Job.where("title like '%?%'", @params[:title])
    end
end
