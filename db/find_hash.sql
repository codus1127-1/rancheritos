select * from r_users ru 
join r_users_hash ruh on ru.user_id = ruh.user_id
where email = $1;