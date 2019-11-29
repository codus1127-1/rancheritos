select * from orders o
join r_users ru on (ru.user_id = o.user_id)
where fulfilled = true 
and picked_up = false
order by id asc;