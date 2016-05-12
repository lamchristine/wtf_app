# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
# Event.destroy_all

User.create(
  avatar: "",
  email: "thomas@test.com",
  firstname: "Thomas",
  lastname: "Thurwood",
  username: "imcool",
  password: "testthomas")

User.create(
  avatar: "",
  email: "dan@test.com",
  firstname: "Dan",
  lastname: "Smith",
  username: "dantheman",
  password: "testdan")

User.create(
  avatar: "",
  email: "melanie@test.com",
  firstname: "Melanie",
  lastname: "Sullivan",
  username: "glassesmcgee",
  password: "testmelanie")

User.create(
  avatar: "",
  email: "kathleen@test.com",
  firstname: "Kathleen",
  lastname: "Roberts",
  username: "parisinthespring",
  password: "testkathleen")

# Event.create({
#   title: "WTF!",
#   content: "Did you just hear that? I totally just heard a noise!",
#   user_id: kathleen.id
#   })
#
# Event.create({
#   title: "Police presence",
#   content:"Don't go here, there are cops everywhere! They confiscated my ...",
#   user_id: thomas.id
#   })
#
# Event.create({
#   title: "Stay away from Pier 39",
#   content:"Total tourist trap. ITS A TRAP",
#   user_id: dan.id
#   })
#
# Event.create({
#   title: "Blah.",
#   content: "Sirens making really loud noises around downtown!",
#   user_id: melanie.id
#   })
#
# Event.create({
#   title: "Graffiti!",
#   content: "What's with this new graffiti on my building??",
#   user_id: melanie.id
#   })
#
# Event.create({
#   title: "Trouble getting a taxi",
#   content: "Taxis are protesting Uber and Lyft, you won't be able to get one today.",
#   user_id: dan.id
#   })

p "Created " + User.count.to_s + " Users"
