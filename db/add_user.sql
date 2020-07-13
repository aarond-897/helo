INSERT INTO helo_users
(username, password,profile_pic)
VALUES
(${username},${password}, ${profilePicture})
returning helo_users.username, helo_users.profile_pic, helo_users.id;