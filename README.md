![squadsnap logo][logo]

# squadsnap2

The #2 sports team management app that makes communication and organization a breeze.

# Technologies

* ruby 2.6.0p0 (2018-12-25 revision 66547) [x86_64-linux]
* rails 6.0.0
* PostgresQL
* React
* [React Router](https://reacttraining.com/react-router/) (for handling navigattion in a React application)
* [Bootstrap](https://getbootstrap.com/) (for styling the front-end components)
* [jQuery](https://jquery.com/) and [Popper](https://popper.js.org/) (for working with Bootstrap)
* Webpacker
* yarn (yarn installs frontend dependencies and manages then in package.json)\
* bundle (bundle update/install for gem updates)

# Routes

# API

# Models

* **recipes**
* **User**
  * `id`
  * `firstName`
  * `lastName`
  * `email`
  * `password`
  * `access` - admin, full, lite, ghost - _not yet implemented_
* **Member**
  * `squad` id
  * `user` id
  * `membership` - owner, member, request, _ghost_
* **Squad**
  * `name`
  * `sport`
  * `owner_id` - user.id of the owner


## Associations
* **User**
  *  `has_many :members`
  *  `has_many :squads`, `through: :members`
* **Member**
  * `belongs_to` `:user`
  * `belongs_to` `:squad`
* **Squad**
  * `has_many :members`, `:dependent => :delete_all`
  * `has_many :users`, `through: :members`

# Testing

* No testing at this time

# Other Notes

* Reference the older squadsnap wiki [here](https://github.com/weteamsteve/squadsnap/wiki)

[logo]: http://weteamsteve.com/wp-content/uploads/2019/06/squadsnap_smaller.png "squadsnap logo"
