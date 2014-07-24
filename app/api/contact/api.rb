module Contact
  class API < Grape::API
    version 'v1', using: :header, vendor: 'insider'
    format :json

  end
end