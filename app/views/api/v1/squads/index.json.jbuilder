json.array!(@squads) do |squad|
  json.partial "show", squad: squad
end
