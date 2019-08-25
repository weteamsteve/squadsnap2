json.id @squad.id
json.name @squad.name
json.sport @squad.sport
json.owner_id @squad.owner_id
json.members @squad.members do |member|
   json.id member.id
   json.squad member.squad
   json.user member.user
   json.membership member.membership
end
