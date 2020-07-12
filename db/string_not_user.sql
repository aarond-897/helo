SELECT * FROM posts
JOIN helo_users ON helo_users.id=posts.author_id
WHERE posts.title LIKE '%' + $1 +'%'
AND
helo_users.id != $2
;
