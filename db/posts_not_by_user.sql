SELECT * FROM posts
JOIN helo_users ON helo_users.id= posts.author_id
WHERE helo_users.id != $1;