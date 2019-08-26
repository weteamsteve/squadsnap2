json.(squad, :id, :name, :sport, :owner_id)
json.members do
  json.extract! squad.member, :id, :squad, :user, :membership
end
