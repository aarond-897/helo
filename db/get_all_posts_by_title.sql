SELECT * FROM posts
JOIN helo_users ON posts.author_id=helo_users.id
WHERE posts.title LIKE concat('%' ,$1,'%');