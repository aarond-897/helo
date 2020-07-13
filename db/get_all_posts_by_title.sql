SELECT p.title, p.img, p.id, hu.username, hu.profile_pic FROM posts p
JOIN helo_users hu ON p.author_id=hu.id
WHERE p.title LIKE concat('%' ,$1,'%');