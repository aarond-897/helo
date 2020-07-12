SELECT p.title, p.img, p.content, hu.username, hu.profile_pic FROM posts p
JOIN helo_users hu ON hu.id = p.author_id
WHERE p.id = $1;