def seed_my_data
  # Create my normal user id: 1
  @weteamsteve = User.create!(
    name: "weteamsteve",
    email: "weteamsteve@gmail.com",
    password: '123456',
    password_confirmation: '123456'
  )

  # Create my secondary user id: 2
  @ashley = User.create!(
    name: "ashley",
    email: "ashley@weteamsteve.com",
    password: '123456',
    password_confirmation: '123456'
  )

  # Create a squad owned by my normal user
  @celtics = Squad.create!(
    name: "Boston Celtics",
    sport: "Basketball",
    owner_id: @weteamsteve.id
  )

  # Create membership info of users on squad
  Member.create!(squad: @celtics, user: @weteamsteve, membership: 'owner')
  Member.create!(squad: @celtics, user: @ashley, membership: 'request')

  # Create a squad owned by secondary user
  @patriots = Squad.create!(
    name: "New England Patriots",
    sport: "Football",
    owner_id: @ashley.id
  )

  # Create membership info of users on squad
  Member.create!(squad: @patriots, user: @ashley, membership: 'owner')
  Member.create!(squad: @patriots, user: @weteamsteve, membership: 'request')
end

def seed_fake_users
  user_id = 3
  10.times do
    User.create(
      name: "test#{user_id}",
      email: "test#{user_id}@test.com",
      password: '123456',
      password_confirmation: '123456'
    )
    user_id += 1
  end
end

def seed_fake_squads
  num = 0
  3.times do
    @squad = Squad.create(
      name: "test_squad#{num}",
      sport: "test_sport#{num}",
      owner_id: '1'
    )
    # Create membership info of users on squad
    Member.create(squad: @squad, user: @weteamsteve, membership: 'owner')

    num += 1
  end

  num = 0
  3.times do
    @squad = Squad.create(
      name: "other_squad#{num}",
      sport: "other_sport#{num}",
      owner_id: '2'
    )
    # Create membership info of users on squad
    Member.create(squad: @squad, user: @ashley, membership: 'owner')

    num += 1
  end
end

seed_my_data
#seed_fake_users
#seed_fake_squads

#if Rails.env.development?
  #seed_fake_squads
#end
