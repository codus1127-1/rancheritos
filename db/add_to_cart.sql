insert into order_items (order_id, food_item_id)
values ($1, $2);

select ru.user_id, ru.name, oi.id, c.title, fi.title, fi.price, fi.description from r_users ru
join order_items oi on (ru.user_id = oi.order_id)
join food_items fi on (oi.food_item_id = fi.id)
join category c on (fi.category_id = c.id)
where ru.user_id = $1;