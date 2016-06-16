# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Event.destroy_all
User.destroy_all

thomas = User.create(
  avatar: "thomas-profile.jpeg",
  email: "thomas@test.com",
  firstname: "Thomas",
  lastname: "Thurwood",
  username: "imcool",
  password: "testthomas")

dan = User.create(
  avatar: "dan-profile.jpeg",
  email: "dan@test.com",
  firstname: "Dan",
  lastname: "Smith",
  username: "dantheman",
  password: "testdan")

melanie = User.create(
  avatar: "melanie-profile.jpg",
  email: "melanie@test.com",
  firstname: "Melanie",
  lastname: "Sullivan",
  username: "glassesmcgee",
  password: "testmelanie")

kathleen = User.create(
  avatar: "kathleen-profile.jpeg",
  email: "kathleen@test.com",
  firstname: "Kathleen",
  lastname: "Roberts",
  username: "parisinthespring",
  password: "testkathleen")

Event.create({
  title: "WTF!",
  content: "Did you just hear that? I totally just heard a noise!",
  longitude: -122.434981,
  latitude: 37.788327,
  category: "Heard It",
  user_id: kathleen.id
  })

Event.create({
  title: "Police presence",
  content:"Don't go here, there are cops everywhere! They confiscated my ...",
  longitude: -122.431869,
  latitude: 37.785563,
  category: "Heard It",
  user_id: thomas.id
  })

Event.create({
  title: "Stay away from Pier 39",
  content:"Total tourist trap. ITS A TRAP",
  longitude: -122.428307,
  latitude: 37.783138,
  category: "Heard It",
  user_id: dan.id
  })

Event.create({
  title: "Blah.",
  content: "Sirens making really loud noises around downtown!",
  user_id: melanie.id,
  longitude: -122.428586,
  latitude: 37.779195,
  category: "Saw It",
  })

Event.create({
  title: "Graffiti!",
  content: "What's with this new graffiti on my building??",
  user_id: thomas.id,
  longitude: -122.430088,
  latitude: 37.773658,
  category: "Saw It",
  })

Event.create({
  title: "Trouble getting a taxi",
  content: "Taxis are protesting Uber and Lyft, you won't be able to get one today.",
  user_id: thomas.id,
  longitude: -122.430099,
  latitude: 37.768137,
  category: "Saw It",
  })

Event.create({
  title: "Closed street",
  content: "3rd street closed at Bush!Traffic backed up for blocks!",
  user_id: dan.id,
  longitude: -122.426022,
  latitude: 37.766313,
  category: "Saw It",
  })

Event.create({
  title: "Traffic light out",
  content: "Traffic light out at 25th and First St.",
  user_id: dan.id,
  longitude: -122.419467,
  latitude: 37.767441,
  category: "Saw It",
  })

Event.create({
  title: "Water main broken",
  content: "Huge flood at 6th and King St.",
  user_id: thomas.id,
  longitude: -122.424971,
  latitude: 37.764897,
  category: "Saw It",
  })

p "Created " + User.count.to_s + " Users, and " + Event.count.to_s + " Events"
