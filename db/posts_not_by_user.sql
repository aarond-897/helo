SELECT p.title, p.img, p.id, hu.username, hu.profile_pic FROM posts p
JOIN helo_users hu ON hu.id= p.author_id
WHERE hu.id != $1;