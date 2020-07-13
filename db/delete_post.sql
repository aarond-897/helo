delete from posts
where id = $1
returning *;